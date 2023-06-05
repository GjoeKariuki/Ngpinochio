import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../Services/products.service';
import { CartService } from '../Services/cart.service';
import { OrdersService } from '../Services/orders.service';
import { addIproduct, iProducts, iorders } from '../Interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  updatingproducts = false
  firstDiv = false
  secondDiv = false
  showorders = false
  products:iProducts[] | undefined
  product!:iProducts
  errorMsg:string[] =[]
  ordersmade!:iorders[]
  errormsg:string[] = []
  addform!:FormGroup
  updateform!:FormGroup

  constructor(private serveproducts:ProductsService, private fb:FormBuilder, 
    private servecart:CartService, private serveorders:OrdersService,
    private router:Router, private route:ActivatedRoute){
    this.serveorders.getOrders().subscribe(
      (res) => { this.ordersmade = res},
      (err) => {  this.errormsg = err}
    )
    this.serveproducts.getProducts().subscribe(
      (res) => {  this.products = res},
      (err) => { this.errormsg = err}
    )
  }
  ngOnInit(): void {
   
        
    this.addform = this.fb.group({
      
      PNAME: ['', [Validators.required]],
      PCATEGORY: ['', [Validators.required]],
      PDESCRIPTION: ['', [Validators.required]],
      PIMAGE: ['', [Validators.required]],
      PRICE: ['', [Validators.required]],
      PQUANTITY: ['', [Validators.required]],
    })
    this.updateform = this.fb.group({
      
      PNAME: ['', [Validators.required]],
      PCATEGORY: ['', [Validators.required]],
      PDESCRIPTION: ['', [Validators.required]],
      PIMAGE: ['', [Validators.required]],
      PRICE: ['', [Validators.required]],
      PQUANTITY: ['', [Validators.required]],
    })
  }
  toggleShow(){
    if(this.firstDiv == false){
      this.firstDiv = true
    }
    else if(this.firstDiv == true) {this.firstDiv = false}
    this.secondDiv = false
    this.showorders = false
    this.updatingproducts = false
  }
  generateForm(){
    if(this.secondDiv == false){
      this.secondDiv = true
    }
    else if (this.secondDiv == true) {this.secondDiv=false}
    this.firstDiv=false
    this.showorders = false
    this.updatingproducts = false
  }
  onformsubmit(){
     let cakke = this.addform.value
    this.serveproducts.addProduct(cakke).subscribe(
      (res) => {
        console.log(res)
        this.addform.reset
      },
      (err) => {console.log(err)}
    )   
    alert("added successfult")
    this.addform.reset()
    
  }
  updateProduct(x:string){
    // open update form
    if(this.updatingproducts == false){
      this.updatingproducts = true
    }
    else if(this.updatingproducts == true){
      this.updatingproducts = false
    }
    this.firstDiv = false    
    this.showorders = false
    this.serveproducts.getProductbyid(x).subscribe(
      (res) => {
        this.product = res
        this.updateform.setValue({
          PNAME:res.PNAME, PCATEGORY:res.PCATEGORY,
          PDESCRIPTION:res.PDESCRIPTION, PIMAGE:res.PIMAGE,
          PRICE:res.PRICE, PQUANTITY:res.PQUANTITY
        })
        this.errorMsg = []
      },
      (err) => {this.errorMsg = err}
    )
    //x:string, prodact:addIproduct
    //this.serveproducts.updateProduct(x,prodact)
    //
    
  }
  onSubmitupdate(){
    let idprod = this.product.PID
    let updatesvales = this.updateform.value
    this.serveproducts.updateProduct(idprod, updatesvales).subscribe(
      (res) => { 
        // alert successful
        console.log(res)
        this.router.navigate(['/admin-view'])
      },
      (err) => {console.log(err)}
    )
  }
  deleteProduct(p:string){
    this.serveproducts.deleteProduct(p)
    
  }

  getTheOrders(){
    
    if(this.showorders == false){
      this.showorders = true
    } else if (this.showorders == true){
      this.showorders = false
    }
    this.firstDiv = false
    this.secondDiv = false
    this.updatingproducts = false
  }
  


}

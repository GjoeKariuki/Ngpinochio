import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../Services/products.service';
import { CartService } from '../Services/cart.service';
import { OrdersService } from '../Services/orders.service';
import { addIproduct, iProducts, iorders } from '../Interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { FilteringPipe } from '../filtering.pipe';
import { CategoryPipe } from '../category.pipe';

@Component({
  selector: 'app-adminview',
  standalone: true,
  imports: [CategoryPipe,FilteringPipe,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  usertoken = localStorage.getItem('token')
  searchString = ''
  catString = ''
  updatingproducts = false
  firstDiv = false
  secondDiv = false
  showorders = false
  products!:iProducts[]
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
      (res) => {  
        this.products = res
        console.log(res);
        
      },
      (err) => { 
        this.errormsg = err
        console.log(err);
        
      }
    )
  }
  ngOnInit(): void {
   
        
    this.addform = this.fb.group({
      
      pname: ['', [Validators.required]],
      pcategory: ['', [Validators.required]],
      pdescription: ['', [Validators.required]],
      pimage: ['', [Validators.required]],
      price: ['', [Validators.required]],
      pquantity: ['', [Validators.required]],
    })
    this.updateform = this.fb.group({
      
      pname: ['', [Validators.required]],
      pcategory: ['', [Validators.required]],
      pdescription: ['', [Validators.required]],
      pimage: ['', [Validators.required]],
      price: ['', [Validators.required]],
      pquantity: ['', [Validators.required]],
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
    this.serveproducts.addProduct(cakke, this.usertoken || '').subscribe(
      (res) => {
        console.log(res)
        //this.addform.reset()
      },
      (err) => {console.log(err)}
    )   
    alert("added successfull")
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
          pname:res.PNAME, pcategory:res.PCATEGORY,
          pdescription:res.PDESCRIPTION, pimage:res.PIMAGE,
          price:res.PRICE, pquantity:res.PQUANTITY
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
    this.serveproducts.updateProduct(idprod, updatesvales, this.usertoken || '').subscribe(
      (res) => { 
        // alert successful
        console.log(res)
        this.router.navigate(['/admin-view'])
      },
      (err) => {console.log(err)}
    )
  }
  deleteProduct(p: string) {
    this.serveproducts.deleteProduct(p, this.usertoken || '').subscribe(
      (res) => {
        console.log(res);
        // Perform any additional actions upon successful deletion
      },
      (err) => {
        console.log(err);
      }
    );
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

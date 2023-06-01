import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceService } from '../ecommerce.service';
import { Products, newproduct } from 'interface';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adminview',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  firstDiv = false
  secondDiv = false
  products:newproduct[] | undefined
  addform!:FormGroup
  constructor(private ecommerceservice:EcommerceService, private fb:FormBuilder){}
  ngOnInit(): void {
    this.products = this.ecommerceservice.getallProducts()
    this.addform = this.fb.group({
      id: ['', Validators.required],
      productName: ['', [Validators.required]],
      productcategory: ['', [Validators.required]],
      productdescription: ['', [Validators.required]],
      productimage: ['', [Validators.required]],
      productprice: ['', [Validators.required]],
      productquantity: ['', [Validators.required]],
    })
  }
  toggleShow(){
    if(this.firstDiv == false){
      this.firstDiv = true
    }
    else if(this.firstDiv == true) {this.firstDiv = false}
    this.secondDiv = false
  }
  generateForm(){
    if(this.secondDiv == false){
      this.secondDiv = true
    }
    else if (this.secondDiv == true) {this.secondDiv=false}
    this.firstDiv=false
  }
  onformsubmit(){
    this.ecommerceservice.addnewproduct(this.addform.value)    
    alert("added successfult")
    this.addform.reset()
    this.products = this.ecommerceservice.getallProducts()
  }
  updateProduct(prodact:newproduct){
    this.ecommerceservice.updateProduct(prodact)
    this.products = this.ecommerceservice.getallProducts()

  }
  deleteProduct(prodact:newproduct){
    this.ecommerceservice.deleteProduct(prodact)
    this.products = this.ecommerceservice.getallProducts()
  }


}

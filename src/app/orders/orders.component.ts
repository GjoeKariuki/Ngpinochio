import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { OrdersService } from '../Services/orders.service';
import { iCart } from '../Interfaces';
import { iorders } from '../Interfaces';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  styledinput = {color:'blue'}
  errormsg:string[] = []
  orderItems:iCart[] = []
  checkoutform:FormGroup = new FormGroup({
    pname: new FormControl(''),
    price: new FormControl(''),
    amount: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required]),
    orderid: new FormControl('', [Validators.required])
  })
  constructor( private formbuilder:FormBuilder, private router:Router, private serveorders:OrdersService, private servecart:CartService){}
  
  ngOnInit(): void {
     this.servecart.getCartItems().subscribe(
      (res) => {this.orderItems = res},
      (err) => {this.errormsg = err}
    )
  }

  onSubmit(){
    // call purchase service   
    //this.cartservice.addtOrders(this.checkoutform.value)
    let formz:iorders = this.checkoutform.value
    if(this.checkoutform.valid){
      this.serveorders.createOrders(formz.CID)
      window.alert("order has beeen submited")
      //this.caclearCart()
      this.checkoutform.reset()
      this.router.navigate(['/products'])
    }
    
    
  }
}

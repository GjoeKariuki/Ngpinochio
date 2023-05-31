import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  styledinput = {color:'blue'}
 
  checkoutform:FormGroup = new FormGroup({
    pname: new FormControl(''),
    price: new FormControl(''),
    amount: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required])
  })
  orderItems = this.cartservice.getItems()
  constructor(private cartservice:CartserviceService, 
    private formbuilder:FormBuilder, private router:Router){}
  
  onSubmit(){
    // call purchase service   
    this.cartservice.clearCart()
    window.alert("order has beeen submiited")
    this.checkoutform.reset()
    this.router.navigate(['/products'])
  }
}

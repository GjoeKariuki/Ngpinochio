import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orderItems = this.cartservice.getItems()
  checkoutform:FormGroup = new FormGroup({
    pname: new FormControl(''),
    price: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required])
  })
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

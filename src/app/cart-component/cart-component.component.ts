import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { Products } from 'interface';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})

  export class CartComponentComponent implements OnInit {
    cartItems: Products[] = [];
  
    constructor(public ecommerceService: EcommerceService) {}
  
    ngOnInit(): void {
      this.cartItems = this.ecommerceService.getCartItems();
    }
}

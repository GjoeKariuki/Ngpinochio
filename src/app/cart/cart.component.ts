import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';
import { MatDialogRef } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { newItems } from '../Interfaces';
import { EcommerceproductService } from '../Services/ecommerceproduct.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  newItem!: newItems;  // Declare the newItem property here
  constructor(
    private cartservice: CartserviceService,
    private matdialogref: MatDialogRef<CartComponent>,
    private router: Router,
    public productService: EcommerceproductService
  ) {}
  items = this.cartservice.getItems();
  closeModalCart() {
    this.matdialogref.close();
  }

  updateItemCount(index: number) {
    const itm = this.items[index];
    if (itm.PCOUNT <= 0) {
      this.items.splice(index, 1);
    }
    // if(itm.pcount === 10){
    //   this.isValueInserted = true
    // }
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
  calculateCartTotal(): number {
    return this.items.reduce((total, item) => total + (item.PRICE * item.PCOUNT), 0);
  }
  gotoCheckout() {
    this.router.navigate(['/orders']);
    this.closeModalCart();
  }
  addToCart() { // Remove the item parameter from the addToCart() method
    this.productService.addToCart(this.newItem).subscribe(
      response => {
        console.log(response.message); // Log the response message
        // Add the item to the cart service or update the cart as required
      },
      error => {
        console.log(error); // Handle the error appropriately
      }
    );
  }
}
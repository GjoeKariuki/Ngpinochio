import { Injectable } from '@angular/core';
import { iProduct } from './productsholder';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  items:iProduct [] = []
  constructor() { }
  addToCart(product:iProduct){
    this.items.push(product)
  }
  getItems(){
  return this.items
  }
  clearCart(){
    this.items = []
    return this.items
  }
}

import { Injectable } from '@angular/core';

import { Products, iCart } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  items:Products [] = []
  itemz: Products[] = []
  constructor() { }
  addToCart(product:Products){
  const lets = ({...product, "PCOUNT":1})
  // const lets = Object.assign(product,{"count":0})
   this.itemz.push(lets)
  }
  getItems(){
  return this.itemz
  }
  clearCart(){
    this.items = []
    return this.itemz
  }
}
import { Injectable } from '@angular/core';
import {Products} from '../../interface/index'
import {iCartproducts} from '../../interface/index'

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  items:Products [] = []
  itemz: iCartproducts[] = []
  constructor() { }
  addToCart(product:Products){
  const lets = ({...product, "count":1})
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

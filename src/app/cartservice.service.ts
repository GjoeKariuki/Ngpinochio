
// import { Injectable } from '@angular/core';

// import { Products, iCart } from './Interfaces';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartserviceService {
//   items:Products [] = []
//   itemz: Products[] = []
//   constructor() { }
//   addToCart(product:Products){
//   const lets = ({...product, "PCOUNT":1})
//   // const lets = Object.assign(product,{"count":0})
//    this.itemz.push(lets)
//   }
//   getItems(){
//   return this.itemz
//   }
//   clearCart(){
//     this.items = []
//     return this.itemz
//   }
// }

// import { Injectable } from '@angular/core';
// import {Products, iOrders, newproduct} from '../../interface/index'


// @Injectable({
//   providedIn: 'root'
// })
// export class CartserviceService {
//   items:Products [] = []
//   itemz: iCartproducts[] = []
//   orders: iOrders[] = []
    
//   constructor() { }
//   addToCart(product:Products){
//   const lets = ({...product, "count":1})
//   // const lets = Object.assign(product,{"count":0})
//    this.itemz.push(lets)
//   }
//   getItems(){
//   return this.itemz
//   }
//   clearCart(){
//     this.items = []
//     return this.itemz
//   }

//   addtOrders(obj:iOrders){
//     const holder = {...obj,"orderstatus":"pending"}
//     this.orders.push(holder)
//   }
//   getAllOrders(){
//     return this.orders
//   }
//   getordersByEmail(obj:string): iOrders[]{
//     const resalt = this.orders.filter(x => x.email.includes(obj))!
//     return resalt
//   }

//   updateOrders(obj:iOrders){
//     Object.assign(this.orders.find(d => d.id == obj.id) as iOrders, obj)
//     return this.orders
//   }
//   deleteOrder(obj:iOrders){
//     const index = this.orders.findIndex(x=>x.id===obj.id)
//     this.orders.splice(index,1)
//   }
//   // get all orders
//   // update order status
//   // delete order
// }


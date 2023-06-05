import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogRef } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { iCart } from '../Interfaces';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  // isValueInserted:boolean=false
  itemz:iCart[] =[]
  constructor(private servecart:CartService,
    private matdialogref:MatDialogRef<CartComponent>,
    private router:Router){}
    ngOnInit(): void {
      this.servecart.getCartItems().subscribe(
        (res) => {
          this.itemz = res
        },
        (err) => {}
      )
    }
  //items = this.cartservice.getItems()
  closeModalCart(){
    this.matdialogref.close()
  }

  updateItemCount(index:number){
    const itm = this.itemz[index]
    if(itm.PCOUNT <= 0){
      this.itemz.splice(index,1)
    }
    // if(itm.pcount === 10){
    //   this.isValueInserted = true
    // }
  }
  removeItem(index:number){
    this.itemz.splice(index,1)
  }
  calculateCartTotal():number{
    return this.itemz.reduce((total,item) => total + (item.PRICE * item.PCOUNT),0)
  }
  gotoCheckout(){
    this.router.navigate(['/orders'])
    this.closeModalCart()
  }
}

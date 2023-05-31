import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';
import { MatDialogRef } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartservice:CartserviceService, 
    private matdialogref:MatDialogRef<CartComponent>,
    private router:Router){}
  items = this.cartservice.getItems()
  closeModalCart(){
    this.matdialogref.close()
  }

  updateItemCount(index:number){
    const itm = this.items[index]
    if(itm.count <= 0){
      this.items.splice(index,1)
    }
  }
  removeItem(index:number){
    this.items.splice(index,1)
  }
  calculateCartTotal():number{
    return this.items.reduce((total,item) => total + (item.price * item.count),0)
  }
  gotoCheckout(){
    this.router.navigate(['/orders'])
    this.closeModalCart()
  }
}

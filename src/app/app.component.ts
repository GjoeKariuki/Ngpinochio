import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'eccomercesuitfrontend';
  constructor(private dialog:MatDialog){}
 openCartModal(){
  const dialogref = this.dialog.open(CartComponent)
 }
}

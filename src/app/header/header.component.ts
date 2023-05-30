import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {MatDialog} from '@angular/material/dialog'
import {CartComponent} from '../cart/cart.component'

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sidenavToggle = new EventEmitter()

  constructor(private dialog:MatDialog){}
  onToggleSidenav = () => { 
    this.sidenavToggle.emit()
  }
  openCartModal(){
    const dialogref = this.dialog.open(CartComponent)
    // dialogref.afterClosed().subscribe(result => {
      
    // })
  }
}

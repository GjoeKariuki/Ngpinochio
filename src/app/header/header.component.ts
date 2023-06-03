import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {MatDialog} from '@angular/material/dialog'
import {CartComponent} from '../cart/cart.component'

import { RouterModule } from '@angular/router';

import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../Services/auth.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,MatToolbarModule,MatIconModule,MatButtonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService: AuthService, private dialog: MatDialog) {}
  
  @Output() sidenavToggle = new EventEmitter();
  faCartShopping = faCartShopping;
  
  onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
  
  openCartModal() {
    const dialogRef = this.dialog.open(CartComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   // Handle dialog closed event
    // });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(private cartservice:CartserviceService){}
  items = this.cartservice.getItems()
}

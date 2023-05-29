import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {products} from '../../app/productsholder'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  disproducts = [...products]
  constructor(private router:Router){}
  goDetails(id:string){
    this.router.navigate(['/products', id])
  }
}

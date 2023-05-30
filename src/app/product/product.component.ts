import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceService } from '../ecommerce.service';
import { Products } from 'interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Products[] = [];

  constructor(private ecommerceService: EcommerceService) {}

  ngOnInit(): void {
    this.products = this.ecommerceService.getProducts();
  }

 

}

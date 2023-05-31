import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceService } from '../ecommerce.service';
import { Products } from 'interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Products[] = [];
  hovered = false; 

  constructor(private ecommerceService: EcommerceService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.ecommerceService.getProducts();
  }
  showOne(id:string){
    this.router.navigate(['/category','product',id ])
      }


 
  

}

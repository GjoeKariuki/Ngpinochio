import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceService } from '../ecommerce.service';
import { Products } from 'interface';
import { Router, RouterModule } from '@angular/router';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Products[] = [];

  constructor(private ecommerceService: EcommerceService, private router:Router, private cartservice:CartserviceService) {}

  ngOnInit(): void {
    this.products = this.ecommerceService.getProducts();
  }
  addstoCart(product:Products){ this.cartservice.addToCart(product)}
  opensDetails(id:string){ this.router.navigate(['/product',id])}
 

}

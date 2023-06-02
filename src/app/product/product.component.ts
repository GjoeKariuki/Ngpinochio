import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceService } from '../ecommerce.service';

import { Router, RouterModule } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { EcommerceproductService } from '../Services/ecommerceproduct.service';
import { Observable } from 'rxjs';
import { Products, iCart } from '../Interfaces';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // products: Products[] = [];
  // hovered = false; 
 products!:Observable<Products[]>;
  constructor(private ecommerceService: EcommerceService, private router: Router, private cartservice:CartserviceService, public ecommerceproductservice: EcommerceproductService) {}

  ngOnInit(): void {
    this.products = this.ecommerceproductservice.getAllProducts();
  }
  showOne(id:string){
    this.router.navigate(['/category','product',id ])
      }
  
      addtoCart(product:Products){ this.cartservice.addToCart(product)}


}

// export class ProductComponent implements OnInit {
//   products: Products[] = [];
//   hovered = false; 
//   product!: Observable<iProducts[]>;

//   constructor(
//     private ecommerceService: EcommerceService,
//     private router: Router,
//     private cartservice: CartserviceService,
//     public ecommerceproductservice: EcommerceproductService
//   ) {}

//   ngOnInit(): void {

//     // this.products = this.ecommerceService.getProducts();
//   }

//   showOne(id: string) {
//     this.router.navigate(['/category', 'product', id]);
//   }
  
//   addtoCart(product: Products) {
//     this.cartservice.addToCart(product);
//   }
// }

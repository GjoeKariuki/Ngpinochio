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
  hovered = false; 

  constructor(private ecommerceService: EcommerceService, private router: Router, private cartservice:CartserviceService) {}

  ngOnInit(): void {
    this.products = this.ecommerceService.getProducts();
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
//     this.product = this.ecommerceproductservice.getProducts();
//     // this.products = this.ecommerceService.getProducts();
//   }

//   showOne(id: string) {
//     this.router.navigate(['/category', 'product', id]);
//   }
  
//   addtoCart(product: Products) {
//     this.cartservice.addToCart(product);
//   }
// }

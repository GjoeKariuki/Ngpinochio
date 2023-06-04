import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceService } from '../ecommerce.service';

import { Router, RouterModule } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { EcommerceproductService } from '../Services/ecommerceproduct.service';
import { Observable } from 'rxjs';
import { Products, iCart } from '../Interfaces';
import { AppState } from 'State/appState';
import { Store } from '@ngrx/store';
import { GetProducts } from 'State/Actions/productsAction';

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
  constructor(private ecommerceService: EcommerceService, private router: Router, private cartservice:CartserviceService, public ecommerceproductservice: EcommerceproductService,private store:Store<AppState>) {}

  ngOnInit(): void {
    this.products = this.ecommerceproductservice.getAllProducts();
    this.store.dispatch(GetProducts())
  }
  showOne(id:string){
    this.router.navigate(['/category','product',id ])
      }
  
      addtoCart(product:Products){ this.cartservice.addToCart(product)}


}


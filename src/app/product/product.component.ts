import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';

import { iCart, iProducts } from '../Interfaces';
import { ProductsService } from '../Services/products.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: iProducts [] = [];
  hovered = false; 
  errormsg:string = ''
  useremail!:string

  constructor(private serveproducts:ProductsService, private router: Router, private servecart:CartService) {
    this.serveproducts.getProducts().subscribe(
      (res) => {
        this.products = res

      },
      (err) => {
        this.errormsg = err
      }

    )
  }

  ngOnInit(): void {
    this.useremail = localStorage.getItem('email')!
  }
  showOne(id:string){
    this.router.navigate(['/category','product',id ])
      }
  
  addtoCart(x:string){ 
    // this.cartservice.addToCart(product)
    this.servecart.addToCart(x, this.useremail).subscribe(
      (res) => {console.log(res)},
      (err) => {console.log(err)}
    )
  
  }



 
  

}

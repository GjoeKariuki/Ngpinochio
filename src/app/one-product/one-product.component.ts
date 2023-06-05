import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ProductsService } from '../Services/products.service';
import { addIcart, iCart, iProducts } from '../Interfaces';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class OneProductComponent implements OnInit {
  product:iProducts | undefined
  errorMsg:string = ''
  usremail!:string
constructor(private route:ActivatedRoute, private serveproducts:ProductsService, private servecart:CartService){}

  ngOnInit(): void {
    this.usremail= localStorage.getItem('email')!
   const routeparams = this.route.snapshot.paramMap
   const prodid = routeparams.get('id') as string
   this.serveproducts.getProductbyid(prodid).subscribe(
    (res) => {
      this.product = res
    },
    (err) => {this.errorMsg = err}
   )
  }
  
  addToCart(x:string){
    this.servecart.addToCart(x,this.usremail).subscribe(
      (res) => {console.log(res)},
      (err) => {console.log(err)}
    )
  }

}

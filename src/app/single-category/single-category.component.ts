import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';


import { iProducts } from '../Interfaces';
import { ProductsService } from '../Services/products.service';
import { CartService } from '../Services/cart.service';


@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SingleCategoryComponent implements OnInit  {
  products:iProducts[]=[]
  categoricalproducts:iProducts[] = []
  useremail!:string
  // category!:string

constructor(private route:ActivatedRoute, private router:Router,private serveproducts: ProductsService, private servecart:CartService){
  this.serveproducts.getProducts().subscribe(
    (res) => {
      this.route.params.subscribe((p:Params) => {
        this.products = res
        this.categoricalproducts = this.products.filter(x => { return x.PCATEGORY = p['category']})
      })
      
    },
    (err) => {}
  )
}
  ngOnInit(): void {
    this.useremail = localStorage.getItem('email')!
  }

  showOne(id:string){
this.router.navigate(['/category','product',id ])
  }

  addstocart(x:string) {
    this.servecart.addToCart(x,this.useremail).subscribe(
      (res) => {console.log(res)},
      (err) => {console.log(err)}
    )
  

  }
}
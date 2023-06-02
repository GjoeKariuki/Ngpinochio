import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';

import { EcommerceService } from '../ecommerce.service';
import { CartserviceService } from '../cartservice.service';
import { CommonModule } from '@angular/common';
import { Products } from '../Interfaces';


@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class OneProductComponent implements OnInit {
constructor(private route:ActivatedRoute, private ecommerceService: EcommerceService, private cartservice:CartserviceService){}
product:Products | undefined
  ngOnInit(): void {
   const routeparams = this.route.snapshot.paramMap
   const prodid = routeparams.get('id') as string
  //  this.product = this.ecommerceService.getProductById(prodid)
    //  this.route.params.subscribe( (p:Params)=>{
    //  this.product=this.ecommerceService.getProductById(p['id'])
    //  })
    // find product
    //  const products = this.ecommerceService.getProducts()   
    //this.product = products.find(pro => pro.id === prodid)
   
  }


  addToCart(product: Products): void {
    this.cartservice.addToCart(product);
  }

}

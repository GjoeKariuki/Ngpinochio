import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Products } from 'interface';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {
constructor(private route:ActivatedRoute, private ecommerceService: EcommerceService){}
product!:Products
  ngOnInit(): void {
   this.route.params.subscribe( (p:Params)=>{
   this.product=this.ecommerceService.getProductById(p['id'])
  console.log(p)
   })
  }


  addToCart(product: Products): void {
    this.ecommerceService.addToCart(product);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'interface';
import { EcommerceService } from '../ecommerce.service';
import { CartserviceService } from '../cartservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-one-product',
  imports: [CommonModule],
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
  standalone: true
})
export class OneProductComponent implements OnInit {
constructor(private route:ActivatedRoute, private ecommerceService: EcommerceService, private cartservice:CartserviceService){}
product:Products | undefined
  ngOnInit(): void {
   // get id from route
   const routeparams = this.route.snapshot.paramMap
   const prodId = routeparams.get('id')
   // find product
   const products = this.ecommerceService.getProducts()
   this.product =  products.find(pro => pro.id === prodId)
  }
  

  addToCart(product: Products): void {
    this.cartservice.addToCart(product)
    // window.alert("product has been added")
  }

}

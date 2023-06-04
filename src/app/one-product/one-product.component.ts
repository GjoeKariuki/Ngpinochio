import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';

import { EcommerceService } from '../ecommerce.service';
import { CartserviceService } from '../cartservice.service';
import { CommonModule } from '@angular/common';
import { Products } from '../Interfaces';
import { EcommerceproductService } from '../Services/ecommerceproduct.service';




@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class OneProductComponent implements OnInit {
constructor(private route:ActivatedRoute, private ecommerceService: EcommerceService, private cartservice:CartserviceService,public ecommerceproductService:EcommerceproductService){}
product:Products | undefined
ngOnInit(): void {
  const routeparams = this.route.snapshot.paramMap;
  const prodid = routeparams.get('id') as string;

  this.ecommerceproductService.getProductById(prodid).subscribe(
    (product: Products | undefined) => {
      this.product = product;
    },
    (error: any) => {
      console.error(error);
    }
  );
}


  addToCart(product: Products): void {
    this.cartservice.addToCart(product);
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { iProduct,products } from '../productsholder';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  product:iProduct | undefined
  constructor(private route:ActivatedRoute, private cartservice:CartserviceService){}
ngOnInit(): void {
  // get id from route
  const routeparams = this.route.snapshot.paramMap
  const prodId = routeparams.get('id')
  // find product
  this.product =  products.find(product => product.pid === prodId)
}
addtoCart(product:iProduct){
  this.cartservice.addToCart(product)
  window.alert("product has been added")
}
}

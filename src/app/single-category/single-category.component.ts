import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Products } from 'interface';
import { EcommerceService } from '../ecommerce.service';
import { CartserviceService } from '../cartservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-category',
  imports: [CommonModule],
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
  standalone: true
})
export class SingleCategoryComponent implements OnInit {
  products:Products[]=[]
  // category!:string
constructor(private route:ActivatedRoute, private router:Router,
    private ecommerceService: EcommerceService, private cartservice:CartserviceService){}
  ngOnInit(): void {
   this.route.params.subscribe((p:Params)=>{
    this.products=this.ecommerceService.getProductinCategory(p['category'])
    console.log(this.products)
   })
  }

  showOne(id:string){
this.router.navigate(['/category','product',id ])
  }
  addstoCart(product:Products){
    this.cartservice.addToCart(product)
  } 
}
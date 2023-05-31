import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Products } from 'interface';
import { EcommerceService } from '../ecommerce.service';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SingleCategoryComponent implements OnInit {
  products:Products[]=[]
  // category!:string
constructor(private route:ActivatedRoute, private router:Router,private ecommerceService: EcommerceService, private cartservice:CartserviceService){}
  ngOnInit(): void {
   this.route.params.subscribe((p:Params)=>{
    this.products=this.ecommerceService.getProductinCategory(p['category'])
    console.log(this.products)

   })
  }

  showOne(id:string){
this.router.navigate(['/category','product',id ])
  }
  addstocart(product:Products) {
    this.cartservice.addToCart(product)
  }
}
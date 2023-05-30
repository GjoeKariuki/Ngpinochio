import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Products } from 'interface';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  products:Products[]=[]
  // category!:string
constructor(private route:ActivatedRoute, private router:Router,private ecommerceService: EcommerceService){}
  ngOnInit(): void {
   this.route.params.subscribe((p:Params)=>{
    this.products=this.ecommerceService.getProductinCategory(p['category'])
    console.log(this.products)

   })
  }

  showOne(id:string){
this.router.navigate(['/category','product',id ])
  }

}
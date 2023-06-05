import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../Services/products.service';
import { iProducts } from '../Interfaces';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class CategoryComponent implements OnInit{
  product:iProducts[]=[]
  categories:string[] = []
  constructor(private serveproducts: ProductsService) {}
  ngOnInit(): void {
    this.serveproducts.getProducts().subscribe(
      (res) => {
        for (let pr of res){
          if(!this.categories.includes(pr.PCATEGORY))
          {this.categories.push(pr.PCATEGORY)}
        }
        return this.categories
      },
      (err) => {}
    )
 }
  
}

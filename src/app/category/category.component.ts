import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { Products } from 'interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class CategoryComponent implements OnInit{
  ngOnInit(): void {
   // this.product = this.ecommerceService.getCategories()
 }
 product:Products[]=[]
constructor(public ecommerceService:EcommerceService) {}

}

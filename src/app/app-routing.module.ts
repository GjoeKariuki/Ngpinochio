import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { OneProductComponent } from './one-product/one-product.component';
import {CartComponentComponent } from './cart-component/cart-component.component';

const routes: Routes = [
  // {path:'',component:ProductComponent},
  {path:'category',component:CategoryComponent,children:[
    {path:':category',component:SingleCategoryComponent},
    {path:'product/:id',component:OneProductComponent},
    { path: ':cart', component:CartComponentComponent },
    {path:'',component:ProductComponent},
    
 
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

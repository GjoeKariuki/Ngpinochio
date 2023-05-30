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
 

  {path: 'login', loadComponent:() => import('./login/login.component').then(c=>c.LoginComponent)},
  {path: 'sign-up', loadComponent:() => import('./registration/registration.component').then(c=>c.RegistrationComponent)},
  {path: 'forgot-pwd', loadComponent:() => import('./forgot-password/forgot-password.component').then(c=>c.ForgotPasswordComponent)},
  {path: 'products', loadComponent:() => import('./products/products.component').then(c=>c.ProductsComponent)},
  {path: 'products/:id', loadComponent:() => import('./product-info/product-info.component').then(c=>c.ProductInfoComponent)},
  {path: 'cart', loadComponent:() => import('./cart/cart.component').then(c=>c.CartComponent)},
  {path: 'orders', loadComponent:() => import('./orders/orders.component').then(c=>c.OrdersComponent)},
  {path: 'profile', loadComponent:() => import('./profile/profile.component').then(c=>c.ProfileComponent)},
  {path: 'home', loadComponent:() => import('./landing/landing.component').then(c=>c.LandingComponent)},
  {path: '', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

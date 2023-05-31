import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path:'',component:ProductComponent},
  // {path:'category',loadComponent:() => import('./category/category.component').then(b=> b.CategoryComponent),children:[
  //   {path:':category',loadChildren: () => import('./single-category/single-category.component').then(c=>c.SingleCategoryComponent)},
  //   {path:'product/:id',loadChildren: () => import('./one-product/one-product.component').then(d=>d.OneProductComponent)},
  //   {path: '', loadChildren:() => import('./product/product.component').then(f=>f.ProductComponent)}
    
  // ]},

  //   { path: ':cart',loadChildren:() => import('./cart-component/cart-component.component').then(e=>e.CartComponentComponent)},
 

    {path:'product/:id',loadComponent: () => import('./one-product/one-product.component').then(d=>d.OneProductComponent)},
    {path: 'products', loadComponent:() => import('./product/product.component').then(f=>f.ProductComponent)},

  // {path: 'products', loadComponent:() => import('./products/products.component').then(c=>c.ProductsComponent)},
  {path: 'login', loadComponent:() => import('./login/login.component').then(c=>c.LoginComponent)},
  {path: 'sign-up', loadComponent:() => import('./registerform/registerform.component').then(c=>c.RegisterformComponent)},
  {path: 'forgot-pwd', loadComponent:() => import('./forgot-password/forgot-password.component').then(c=>c.ForgotPasswordComponent)},
  // {path:'products',loadComponent:() => import('./product/product.component').then(c=>c.ProductComponent)},
  // {path: 'products/:id', loadComponent:() => import('./product-info/product-info.component').then(c=>c.ProductInfoComponent)},
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component'
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductInfoComponent } from './product-info/product-info.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'sign-up', component:RegistrationComponent},
  {path: 'forgot-pwd', component:ForgotPasswordComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'products/:id', component:ProductInfoComponent},
  {path: 'cart', component:CartComponent},
  {path: 'orders', component:OrdersComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'home', component:LandingComponent},
  {path: '', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

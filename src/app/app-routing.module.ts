import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ActivateService } from './Services/activate.service';

const routes: Routes = [
  // {path:'',component:ProductComponent},

  {
    path: 'category',
    canActivate:[ActivateService],
    loadComponent: () =>
      import('./category/category.component').then((c) => c.CategoryComponent),
    children: [
      {
        path: ':category',
        loadComponent: () =>
          import('./single-category/single-category.component').then(
            (d) => d.SingleCategoryComponent
          ),
      },

      {
        path: 'product/:id',
        loadComponent: () =>
          import('./one-product/one-product.component').then(
            (e) => e.OneProductComponent
          ),
      },
      {
        path: '',
        canActivate:[ActivateService],
        loadComponent: () =>
          import('./product/product.component').then((g) => g.ProductComponent),
      },
    ],
  }, // {path: 'products', loadComponent:() => import('./products/products.component').then(c=>c.ProductsComponent)},

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },

  {
    path: 'sign-up',
 
    loadComponent: () =>
      import('./registerform/registerform.component').then(
        (c) => c.RegisterformComponent
      ),
  },

  {
    path: 'forgot-pwd',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component').then(
        (c) => c.ForgotPasswordComponent
      ),
  },

  {
    path: 'products',
    canActivate:[ActivateService],
    loadChildren: () => import('./product/product.component').then((c) => c.ProductComponent),
  },


  {
    path: 'cart' ,
    loadComponent: () =>
      import('./cart/cart.component').then((c) => c.CartComponent),
  },

  {
    path: 'orders',
    loadComponent: () =>
      import('./orders/orders.component').then((c) => c.OrdersComponent),
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((c) => c.ProfileComponent),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./landing/landing.component').then((c) => c.LandingComponent),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}

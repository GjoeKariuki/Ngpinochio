import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { RegisterformComponent } from './registerform/registerform.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { OneProductComponent } from './one-product/one-product.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SingleCategoryComponent,
    OneProductComponent,
    CartComponentComponent,
    CarouselComponent,
  
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterformComponent,
    ProductComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

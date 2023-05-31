import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { RegisterformComponent } from './registerform/registerform.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { OneProductComponent } from './one-product/one-product.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CarouselComponent } from './carousel/carousel.component';

import { LandingComponent } from './landing/landing.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {IonicModule} from '@ionic/angular'


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SingleCategoryComponent,
    OneProductComponent,
    CartComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RegisterformComponent,
    ProductComponent,
    LandingComponent,
    HeaderComponent,
    SidenavComponent,
    MatDialogModule,
    MatToolbarModule,MatIconModule,MatListModule,MatButtonModule,MatSidenavModule,
    CarouselComponent ,
    IonicModule.forRoot(),
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

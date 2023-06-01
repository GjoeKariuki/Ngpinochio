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

import { CarouselComponent } from './carousel/carousel.component';

import { LandingComponent } from './landing/landing.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatDialogModule } from '@angular/material/dialog';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'



@NgModule({
  declarations: [
    AppComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HeaderComponent,
    SidenavComponent,
    
   
    MatDialogModule,
    MatToolbarModule,MatIconModule,MatListModule,MatButtonModule,MatSidenavModule,

    CarouselComponent,
    

  
    IonicModule.forRoot(),
    HttpClientModule,
    FontAwesomeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

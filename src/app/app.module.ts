import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselComponent } from './carousel/carousel.component';

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store'
import { paragraphReducer } from 'State/Reducers/paragraphReducer';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from 'State/Reducers/productReducer';
import { ProductEffects } from 'State/Effects/ProductsEffects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';




@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,AppRoutingModule,
    RouterModule, HeaderComponent,SidenavComponent,   
    MatDialogModule,MatToolbarModule,MatIconModule,
    MatListModule,MatButtonModule,MatSidenavModule,
    CarouselComponent,FontAwesomeModule,
    IonicModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot({paragraph:paragraphReducer, product:productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ name:'APM Demo App Devtools' ,maxAge: 25, logOnly: !isDevMode() }),  


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

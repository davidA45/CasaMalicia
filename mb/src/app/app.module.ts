import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from "@angular/forms";
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavDrawerComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    HelloComponent, 
   
  
    
  ],
  exports: [  

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShoppingCartModule,
   
   
    //AuthModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})

export class AppModule { }

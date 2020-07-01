import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomePageComponent,
    BlogComponent,
    TravelsComponent,
    FooterComponent,
    ListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

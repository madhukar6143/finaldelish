import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { CrabComponent } from './crab/crab.component';
import { DessertComponent } from './dessert/dessert.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FishComponent } from './fish/fish.component';
import { FooterComponent } from './footer/footer.component';
import { GrillComponent } from './grill/grill.component';
import { HomeComponent } from './home/home.component';
import { IcecreamsComponent } from './icecreams/icecreams.component';
import { LoginComponent } from './login/login.component';
import { MaincourseComponent } from './maincourse/maincourse.component';
import { NonvegcurryComponent } from './nonvegcurry/nonvegcurry.component';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PrawnsComponent } from './prawns/prawns.component';
import { ProductComponent } from './product/product.component';
import { RotiComponent } from './roti/roti.component';
import { SaladComponent } from './salad/salad.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { SignupComponent } from './signup/signup.component';
import { SoupComponent } from './soup/soup.component';
import { StarterComponent } from './starter/starter.component';
import { VegcurryComponent } from './vegcurry/vegcurry.component';
import { CakeComponent } from './cake/cake.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    BiryaniComponent,
    CrabComponent,
    DessertComponent,
    DrinksComponent,
    FishComponent,
    FooterComponent,
    GrillComponent,
    HomeComponent,
    IcecreamsComponent,
    LoginComponent,
    MaincourseComponent,
    NonvegcurryComponent,
    PgnotfoundComponent,
    PizzaComponent,
    PrawnsComponent,
    ProductComponent,
    RotiComponent,
    SaladComponent,
    SeafoodComponent,
    SignupComponent,
    SoupComponent,
    StarterComponent,
    VegcurryComponent,
    CakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksHomepageComponent } from './books-homepage/books-homepage.component';
import { BooksComponent } from './books/books.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { BookComponent } from './books/book/book.component';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {AppRouting} from "./app-routes";
import { AddToCartComponent } from './books/add-to-cart/add-to-cart.component';
import {BooksService} from "./services/books.service";
import {CartService} from "./services/cart.service";
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksHomepageComponent,
    BooksComponent,
    CheckoutPageComponent,
    BookComponent,
    CartComponent,
    ErrorPageComponent,
    AddToCartComponent,
    ShoppingBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRouting

  ],
  providers: [ CartService
    , BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

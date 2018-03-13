import { Component } from '@angular/core';
import {BooksService} from "./services/books.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
    constructor( private cart_service: CartService, private books_service: BooksService){};
}

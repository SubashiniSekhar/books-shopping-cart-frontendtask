import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';
import {CartService} from "../services/cart.service";


/*
 * component for setting up the
 * book list on the homepage
 * */
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [];

  constructor( private cart_service: CartService, private books_service: BooksService) {
  }

  ngOnInit() {
    this.books = this.books_service.getBooksList();

  }

}

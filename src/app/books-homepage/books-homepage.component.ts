import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
/*
 * component for setting up the home page of the application
 * */
@Component({
  selector: 'books-homepage',
  templateUrl: './books-homepage.component.html',
  styleUrls: ['./books-homepage.component.css']
})
export class BooksHomepageComponent implements OnInit {

  cart_quantity: number = 0;
  constructor(private cart_service: CartService) { }

  ngOnInit() {
    this.cart_quantity = this.cart_service.getCartQuantity();
  }

}

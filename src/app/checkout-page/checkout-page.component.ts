import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {BooksService} from "../services/books.service";
/*
 * component to handle checkout functionality
 * */
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  showSuccessfulPurchase:boolean = false;
  cart = [];
  constructor(private cart_service: CartService, private books_service: BooksService) {}

  ngOnInit() {
    this.cart = this.cart_service.getItemsInCart();
  }
  /*
  * removes a book from the cart
  * */
  deleteBookFromCart(book){
    this.cart_service.removeItemFromCart(book);
  }
  /*
   * calculates the total price in cart
   * */
  getCartTotal(){
    return +this.cart_service.getCartTotalPrice();
  }
  /*
   * makes the cart empty
   * */
  resetCart(){
    this.showSuccessfulPurchase=true;
    this.cart_service.resetCart();
    this.books_service.resetBookList();
  }

}

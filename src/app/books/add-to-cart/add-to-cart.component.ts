import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {BooksService} from "../../services/books.service";
/*
 * component for handling the
 * addition and removal of items
 * in cart
 * */
@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() this_book ;
  constructor(private cart_service: CartService, private books_service: BooksService) { }

  ngOnInit() {
  }

  addToCart(){
    this.cart_service.addItemToCart(this.this_book);
    this.books_service.updateBookInCartStatus(this.this_book.id, true);

  }

  removeFromCart(){
    this.cart_service.removeItemFromCart(this.this_book);
  }
  isBookAddedInCart(){
    return this.books_service.getBookInCartStatus(this.this_book.id);
  }

}

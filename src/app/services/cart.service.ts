import {BooksService} from "./books.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CartService {

  cart = [];

  constructor(private books_service: BooksService) {};

addItemToCart(item){
  this.cart.push(item);
  this.books_service.getBookDetails(item.id).stock_remaining--;
}

getItemsInCart(){
  return this.cart;
}

removeItemFromCart(item){
  if(this.getCartQuantity()> 0){
    var item_to_remove_index = this.cart.findIndex(function(curitem){
      return curitem.id === item.id;
    });
    this.cart.splice(item_to_remove_index,1);
    this.books_service.updateBookInCartStatus(item.id, false);
    this.books_service.getBookDetails(item.id).stock_remaining++;
  }

}
getCartQuantity(){
  return this.cart.length;
}

resetCart(){
  this.cart=[];
}

getCartTotalPrice(){
  var cart_total = this.cart.map(a => a.price).reduce(function(a, b) { return a + b; }, 0);
  return cart_total;
}
}

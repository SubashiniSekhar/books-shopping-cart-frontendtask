import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  cart_quantity: number = 0;
  constructor(private cart_service: CartService) { }

  ngOnInit() {
    this.cart_quantity = this.cart_service.getCartQuantity();
  }

}

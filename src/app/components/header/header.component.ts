import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = {items: []};
  itemQuantity = 0;

  @Input() 
   get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemQuantity = cart.items.reduce((prev, curr) => prev + curr.quantity, 0);
  }
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cart]="cart"></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
 
  constructor(private curtService: CartService) { }
  cart: Cart = {items: []};

  ngOnInit() {
   this.curtService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
    });
  }
}

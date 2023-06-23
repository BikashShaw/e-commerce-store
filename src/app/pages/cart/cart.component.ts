import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [
    { product: 'https://via.placeholder.com/150', 
    name: 'Snickers', 
    price: 150, 
    quantity: 1, 
    id: 1 },
    { product: 'https://via.placeholder.com/150', 
    name: 'Boots', 
    price: 250, 
    quantity: 2, 
    id: 1 },
  ]};
  dataSource : Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product', 
    'name', 
    'price', 
    'quantity', 
    'total', 
    'action'
];

  constructor() { }

  ngOnInit(): void {
    this,this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
      // get total price
      return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

}

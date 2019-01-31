import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {
  @Input()
  items: CartItem[]

  @Output() increaseQuantity = new EventEmitter();
  @Output() decreaseQuantity = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQuantity.emit(item);
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQuantity.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }

}

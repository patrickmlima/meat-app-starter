import { Component, OnInit } from '@angular/core';

import { RadioOption } from '../shared/radio/radio-option.model';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQuantity(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQuantity(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }
}

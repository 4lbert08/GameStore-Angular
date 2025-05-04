import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ItemCart } from '../../models/item-cart';
import {MainHeaderComponent} from '../../components/main-header/main-header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {ItemCartComponent} from '../../components/item-cart/item-cart.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  imports: [
    MainHeaderComponent,
    FooterComponent,
    ItemCartComponent,
    NgForOf
  ]
})
export class CartComponent implements OnInit {
  items: ItemCart[] = [];

  constructor(private cartService: CartService) {}

  async ngOnInit(): Promise<void> {
    this.items = await this.cartService.getCartItems();
  }
}

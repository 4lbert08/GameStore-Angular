import {Component, inject, OnInit} from '@angular/core';
import {MainHeaderComponent} from '../../components/main-header/main-header.component';
import {UserNavBarComponent} from '../../components/user-nav-bar/user-nav-bar.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {User} from 'firebase/auth';
import {AuthService} from '../../services/auth/auth.service';
import {Order} from '../../models/order';
import {OrderComponent} from '../../components/order/order.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-my-orders',
  imports: [
    MainHeaderComponent,
    UserNavBarComponent,
    FooterComponent,
    OrderComponent,
    CommonModule
  ],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit {

  authService: AuthService = inject(AuthService);
  firestore: FirestoreService = inject(FirestoreService);
  user: User | null = null;
  userOrders: Order[] = [];

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
      if (this.user) {
        this.firestore.getOrdersFromUser(this.user.uid).subscribe(orders => {
          this.userOrders = orders;
        })
      }
    })
  }
}

import {Component, inject, Input, OnInit} from '@angular/core';
import {Order} from '../../models/order';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {Game} from '../../models/game';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [
    RouterLink
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  @Input() order: Order | null = null;
  game: Game | null = null;
  firestore: FirestoreService = inject(FirestoreService);

  ngOnInit() {
    this.firestore.getGameById(this.order?.productId).subscribe(game => {this.game = game;});
  }
}

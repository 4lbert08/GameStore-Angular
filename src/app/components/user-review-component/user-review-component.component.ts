import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Review} from '../../models/review';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {Game} from '../../models/game';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-review-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-review-component.component.html',
  styleUrl: './user-review-component.component.css'
})
export class UserReviewComponentComponent {
  @Input() public showGameInfo: boolean = true;
  @Input() public showUserInfo: boolean = true;
  @Input() public review!: Review;
  firestoreService = inject(FirestoreService);
  game!: Game;
  user!: User;

  ngOnInit(): void {
    this.firestoreService.getGameById(this.review.gameId).subscribe(game => {
      this.game = game;
    });

    this.firestoreService.getUserById(this.review.userId).subscribe(user => {
      this.user = user;
    });
  }
}

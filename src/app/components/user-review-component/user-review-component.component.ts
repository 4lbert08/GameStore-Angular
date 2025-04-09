import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../models/review';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Game } from '../../models/game';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-review-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-review-component.component.html',
  styleUrls: ['./user-review-component.component.css']
})
export class UserReviewComponent implements OnInit {
  @Input() public showGameInfo: boolean = true;
  @Input() public showUserInfo: boolean = true;
  @Input() public review!: Review;
  @Input() public game!: Game;

  firestoreService = inject(FirestoreService);
  user: User | null = null;
  isLoading: boolean = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadUser();
  }

  private async loadUser(): Promise<void> {
    try {
      if (this.review.userId) {
        const user$ = this.firestoreService.getUserById(this.review.userId);
        this.user = await new Promise((resolve) => user$.subscribe(user => resolve(user)));
      } else {
        this.user = null;
      }
    } catch (err) {
      this.error = 'Error loading user data';
      console.error('Error loading user data', err);
    } finally {
      this.isLoading = false;
    }
  }
}

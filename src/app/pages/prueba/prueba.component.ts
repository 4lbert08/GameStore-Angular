import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import {Review} from '../../models/review';
import {UserReviewComponentComponent} from '../../components/user-review-component/user-review-component.component';

@Component({
  selector: 'app-game-showcase-page',
  standalone: true,
  imports: [CommonModule, RouterLink, UserReviewComponentComponent],
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  private firestoreService = inject(FirestoreService);
  private route = inject(ActivatedRoute);
  reviews: Review[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.firestoreService.getReviewsFromGame(id).subscribe(reviews => {
          this.reviews= reviews;
        })
      }
    });
  }
}

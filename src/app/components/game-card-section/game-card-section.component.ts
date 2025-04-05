import {Component, inject, OnInit} from '@angular/core';
import {GameCardComponent} from '../game-card/game-card.component';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Game} from '../../models/game';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {TypedLoaderService} from '../../services/typed-loader/typed-loader.service';

@Component({
  selector: 'app-game-card-section',
  standalone: true,
  imports: [
    GameCardComponent,
    CommonModule,
  ],
  templateUrl: './game-card-section.component.html',
  styleUrl: './game-card-section.component.css'
})
export class GameCardSectionComponent implements OnInit {
  title: string = "";
  firestoreService = inject(FirestoreService);
  router = inject(Router);
  loader = inject(TypedLoaderService);

  games: Game[] = [];

  ngOnInit(): void {
    this.loader.load(Game, this.firestoreService.getGames());
    this.loader.getData$(Game).subscribe(games => {
      if (games) this.games = games;
    })
  }

  navigateToViewMore(): void {
    this.router.navigate(['/view-more-sections']);
  }
}

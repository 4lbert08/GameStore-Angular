import {Component, inject, OnInit} from '@angular/core';
import {GameCardComponent} from '../game-card/game-card.component';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Game} from '../../models/game';
import {FirestoreService} from '../../services/firestore/firestore.service';

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
  firestoreService = inject(FirestoreService);
  router = inject(Router);

  games: Game[] = [];
  loading: boolean = true;
  error: string | null = null;


  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.loading = true;
    this.firestoreService.getGames().subscribe({
      next: (games) => {
        this.games = games;
        console.log(this.games);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los juegos:', err);
        this.error = 'No se pudieron cargar los juegos. Por favor, inténtalo de nuevo más tarde.';
        this.loading = false;
      }
    });
  }

  navigateToViewMore(): void {
    this.router.navigate(['/view-more-sections']);
  }
}

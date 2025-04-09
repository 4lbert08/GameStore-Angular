import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GameCardSectionComponent } from '../../components/game-card-section/game-card-section.component';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Review } from '../../models/review';
import { UserReviewComponentComponent } from '../../components/user-review-component/user-review-component.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-showcase-page',
  standalone: true,
  imports: [CommonModule, RouterLink, GameCardSectionComponent, MainHeaderComponent, FooterComponent, UserReviewComponentComponent],
  templateUrl: './game-showcase-page.component.html',
  styleUrls: ['./game-showcase-page.component.css']
})
export class GameShowcasePageComponent implements OnInit, OnDestroy {
  game: Game | null = null;
  recommendedGames: Game[] = [];
  reviews: Review[] = [];
  gameNotFound: boolean = false;
  sanitizedTrailerUrl: string | null = null;
  isLoading: boolean = true;
  error: string | null = null;

  private subscriptions: Subscription[] = []; // Para manejar múltiples suscripciones

  private firestoreService = inject(FirestoreService);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.loadGameData(id);
      } else {
        this.gameNotFound = true;
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    // Limpiar todas las suscripciones para evitar memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private loadGameData(gameId: string): void {
    this.isLoading = true;
    this.error = null;
    this.game = null;
    this.reviews = [];
    this.recommendedGames = [];

    const gameSub = this.firestoreService.getGameById(gameId).subscribe({
      next: (game) => {
        this.game = game;
        this.gameNotFound = false;

        this.setTrailerUrl(game.trailer);

        // Cargar juegos recomendados
        const recommendedSub = this.firestoreService.getGames({
          system: this.game.system,
        }).subscribe({
          next: (games) => {
            this.recommendedGames = games;
          },
          error: (err) => console.error('Error loading recommended games', err)
        });
        this.subscriptions.push(recommendedSub);
      },
      error: (err) => {
        console.error('Error loading game', err);
        this.gameNotFound = true;
        this.error = 'Game not found';
      }
    });

    // Cargar reseñas (separada para manejar errores independientemente)
    const reviewsSub = this.firestoreService.getReviewsFromGame(gameId).subscribe({
      next: (reviews) => {
        console.log('Reviews loaded:', reviews); // Depuración
        this.reviews = reviews;
      },
      error: (err) => {
        console.error('Error loading reviews', err);
        this.error = this.error ? `${this.error}; Error loading reviews: ${err.message}` : `Error loading reviews: ${err.message}`;
      }
    });

    this.subscriptions.push(gameSub, reviewsSub);

    // Marcar como no cargando una vez que todo esté listo (o al menos el juego)
    setTimeout(() => {
      if (this.game) {
        this.isLoading = false;
      }
    }, 1000); // Ajusta el tiempo si es necesario, o usa un observable más complejo
  }

  private setTrailerUrl(trailer: string): void {
    this.sanitizedTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(trailer) as string;
  }
}

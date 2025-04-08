import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { DomSanitizer } from '@angular/platform-browser';
import {GameCardSectionComponent} from '../../components/game-card-section/game-card-section.component';
import {MainHeaderComponent} from '../../components/main-header/main-header.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-game-showcase-page',
  standalone: true,
  imports: [CommonModule, RouterLink, GameCardSectionComponent, MainHeaderComponent, FooterComponent],
  templateUrl: './game-showcase-page.component.html',
  styleUrls: ['./game-showcase-page.component.css']
})
export class GameShowcasePageComponent implements OnInit {
  game!: Game;
  recommendedGames!: Game[];
  gameNotFound: boolean = false;
  sanitizedTrailerUrl: string | null = null;

  private firestoreService = inject(FirestoreService);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.firestoreService.getGameById(id).subscribe({
          next: (game) => {
            this.game = game;
            this.gameNotFound = false;

            this.firestoreService.getGames({
              system: this.game.system,
            }).subscribe(games => {
              this.recommendedGames = games;
            });

            this.setTrailerUrl(game.trailer);
          },
          error: (err) => {
            console.error('Error loading game', err);
            this.gameNotFound = true;
          }
        });
      } else {
        this.gameNotFound = true;
      }
    });
  }

  private setTrailerUrl(trailer: string): void {
    this.sanitizedTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(trailer) as string;
  }
}

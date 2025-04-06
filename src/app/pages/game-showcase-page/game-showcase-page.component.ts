import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-game-showcase-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './game-showcase-page.component.html',
  styleUrls: ['./game-showcase-page.component.css']
})
export class GameShowcasePageComponent implements OnInit {
  game!: Game;
  gameNotFound: boolean = false;
  sanitizedTrailerUrl: string | null = null;

  private firestoreService = inject(FirestoreService);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.firestoreService.getGameById(id).subscribe({
        next: (game) => {
          this.game = game;
          this.setTrailerUrl(game.trailer);
        },
        error: (err) => {
          console.error('Error load game', err);
          this.gameNotFound = true;
        }
      });
    } else {
      this.gameNotFound = true;
    }
  }

  private setTrailerUrl(trailer: string): void {
    this.sanitizedTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(trailer) as string;
  }
}

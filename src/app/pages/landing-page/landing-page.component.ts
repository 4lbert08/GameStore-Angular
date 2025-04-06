import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { GameCardSectionComponent } from '../../components/game-card-section/game-card-section.component';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Game } from '../../models/game';
import { Subscription } from 'rxjs';

interface GameSection {
  title: string;
  games: Game[];
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    GameCardSectionComponent,
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit, OnDestroy {
  firestoreService = inject(FirestoreService);
  sections: GameSection[] = [];
  private subscriptions: Subscription[] = [];

  ngOnInit() {
    const pcGames = this.firestoreService.getGames({
      system: 'PC',
      inStock: true
    }).subscribe(games => {
      this.sections.push({ title: 'PC Games in Stock', games });
    });

    const actionGamesSub = this.firestoreService.getGames({
      genre: 'action'
    }).subscribe(games => {
      this.sections.push({ title: 'Action Games', games });
    });

    const familyGamesSub = this.firestoreService.getGames({
      pegi: 7,
      inStock: true
    }).subscribe(games => {
      this.sections.push({ title: 'Family Friendly (pegi 7)', games });
    });

    this.subscriptions.push(pcGames, actionGamesSub, familyGamesSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

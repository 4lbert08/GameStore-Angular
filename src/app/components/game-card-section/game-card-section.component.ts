import {Component, inject, Input} from '@angular/core';
import {GameCardComponent} from '../game-card/game-card.component';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Game} from '../../models/game';

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
export class GameCardSectionComponent {
  router = inject(Router);

  @Input() title: string = "";
  @Input() games: Game[] = [];

  navigateToViewMore(): void {
    this.router.navigate(['/view-more-sections']);
  }
}

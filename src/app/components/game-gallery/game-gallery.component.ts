import {Component, Input} from '@angular/core';
import {Game} from '../../models/game';
import {NgForOf} from '@angular/common';
import {GameCardComponent} from '../game-card/game-card.component';

@Component({
  selector: 'app-game-gallery',
  templateUrl: './game-gallery.component.html',
  imports: [
    NgForOf,
    GameCardComponent
  ],
  styleUrls: ['./game-gallery.component.css']
})
export class GameGalleryComponent{

  @Input() games: Game[] = [];

  maxGamesPerPage = 20;
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.games.length / this.maxGamesPerPage);
  }

  get paginatedGames() {
    const startIndex = (this.currentPage - 1) * this.maxGamesPerPage;
    const endIndex = startIndex + this.maxGamesPerPage;
    return this.games.slice(startIndex, endIndex);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}

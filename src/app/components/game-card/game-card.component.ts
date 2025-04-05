import {Component, Input, numberAttribute} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  @Input() gameId: string = "";
  @Input() gameCover: string ="";
  @Input() gameName: string ="";
  @Input() gamePrice: string = "";

  constructor(private router: Router) {}

  onCardClick(): void {
    if (this.gameId) {
      this.router.navigate(['gamePage', this.gameId]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }
}

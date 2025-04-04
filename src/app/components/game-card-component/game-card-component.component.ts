import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './game-card-component.component.html',
  styleUrl: './game-card-component.component.css'
})
export class GameCardComponentComponent {
  @Input() gameCover: string ="";
  @Input() gameName: string ="";
  @Input() gamePrice: number = 0;
}

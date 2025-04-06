import {Component, Input} from '@angular/core';
import {Game} from '../../models/game';

@Component({
  selector: 'app-game-in-cart-component',
  imports: [],
  templateUrl: './game-in-cart.component.html',
  styleUrl: './game-in-cart.component.css'
})
export class GameInCartComponent {
  @Input() game!: Game;
}

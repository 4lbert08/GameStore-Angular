import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-in-cart',
  imports: [],
  templateUrl: './game-in-cart.component.html',
  styleUrl: './game-in-cart.component.css'
})
export class GameInCartComponent {
  @Input() gameCover: string ="";
  @Input() gameName: string ="";
  @Input() gameSystem: string ="";
  @Input() gamePlatform: string ="";
  @Input() gamePrice: number = 0;
}

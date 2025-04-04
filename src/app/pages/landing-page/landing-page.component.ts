import { Component } from '@angular/core';
import {GameCardComponent} from '../../components/game-card/game-card.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    GameCardComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}

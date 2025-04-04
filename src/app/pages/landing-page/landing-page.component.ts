import { Component } from '@angular/core';
import {GameCardComponentComponent} from '../../components/game-card-component/game-card-component.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    GameCardComponentComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}

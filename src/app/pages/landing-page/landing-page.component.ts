import { Component } from '@angular/core';
import {GameCardComponent} from '../../components/game-card/game-card.component';
import {GalleryComponent} from '../../components/game-card-section/game-card-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    GameCardComponent,
    GalleryComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}

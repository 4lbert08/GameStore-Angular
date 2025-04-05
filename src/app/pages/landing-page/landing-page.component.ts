import { Component } from '@angular/core';
import {GameCardSectionComponent} from '../../components/game-card-section/game-card-section.component';
import { CommonModule } from '@angular/common';

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
export class LandingPageComponent {
  sections: string[] = [];

}

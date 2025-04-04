import { Routes } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {GameShowcasePageComponent} from './pages/game-showcase-page/game-showcase-page.component';
import {AboutUsPageComponent} from './pages/about-us-page/about-us-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'gamePage/:id', component: GameShowcasePageComponent },
  { path: '**', redirectTo: '' }
];

import { Routes } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {GameShowcasePageComponent} from './pages/game-showcase-page/game-showcase-page.component';
import {AboutUsPageComponent} from './pages/about-us-page/about-us-page.component';
import {ViewMoreSectionPageComponent} from './pages/view-more-section-page/view-more-section-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'view-more-section-page', component: ViewMoreSectionPageComponent },
  { path: 'gamePage/:id', component: GameShowcasePageComponent },
  { path: '**', redirectTo: '' }
];

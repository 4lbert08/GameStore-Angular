import { Routes } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {GameShowcasePageComponent} from './pages/game-showcase-page/game-showcase-page.component';
import {AboutUsPageComponent} from './pages/about-us-page/about-us-page.component';
import {ViewMoreSectionPageComponent} from './pages/view-more-section-page/view-more-section-page.component';
import {AdvancedSearchPageComponent} from './pages/advanced-search-page/advanced-search-page.component';
import {UserSettingsComponent} from './pages/user-settings/user-settings.component';
import {LoginComponent} from './pages/login/login.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './pages/reset-password/reset-password.component';
import {OTPVerificationComponent} from './pages/otpverification/otpverification.component';

export const routes: Routes = [
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'view-more-section-page', component: ViewMoreSectionPageComponent },
  { path: 'advanced-search-page', component: AdvancedSearchPageComponent },
  { path: 'gamePage/:id', component: GameShowcasePageComponent },
  { path: 'userSettings', component: UserSettingsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'forgotPassword', component:ForgotPasswordComponent},
  { path: 'resetPassword', component:ResetPasswordComponent},
  { path: 'OTPVerification', component:OTPVerificationComponent},
  { path: 'prueba', component: PruebaComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' }
];


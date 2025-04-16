import { Component } from '@angular/core';
import {MainHeaderComponent} from '../../components/main-header/main-header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {UserNavBarComponent} from '../../components/user-nav-bar/user-nav-bar.component';

@Component({
  selector: 'app-user-settings',
  imports: [
    MainHeaderComponent,
    FooterComponent,
    UserNavBarComponent
  ],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {

}

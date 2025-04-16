import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-secondary-header',
    imports: [
        RouterLink,
        FormsModule
    ],
  templateUrl: './secondary-header.component.html',
  styleUrl: './secondary-header.component.css'
})
export class SecondaryHeaderComponent {
  selectedLanguage: string = "en";

}

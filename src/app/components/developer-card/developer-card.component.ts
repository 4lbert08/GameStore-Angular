import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-developer-card',
  standalone: true,
  imports: [],
  templateUrl: './developer-card.component.html',
  styleUrl: './developer-card.component.css'
})
export class DeveloperCardComponent {
  @Input() developerImage: string = "";
  @Input() developerName: string = "";
  @Input() developerMail: string = "";
  @Input() developerOccupation: string = "";
}

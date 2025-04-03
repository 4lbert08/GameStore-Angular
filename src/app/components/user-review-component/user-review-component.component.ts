import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-review-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-review-component.component.html',
  styleUrl: './user-review-component.component.css'
})
export class UserReviewComponentComponent {
  @Input() public showGameInfo: boolean = true;
  @Input() public showUserInfo: boolean = true;
  @Input() public gameCover: string = "";
  @Input() public gameName: string = "";
  @Input() public gameLink: string = "";
  @Input() public userName: string = "";
  @Input() public userAvatar: string = "";
  @Input() public review: string = "";
}

import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-otpverification',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './otpverification.component.html',
  styleUrl: './otpverification.component.css'
})
export class OTPVerificationComponent {

  router = inject(Router);

  onSubmit() {
    this.router.navigate(['/resetPassword']).then(r => scroll(0,0));
  }
}

import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  router = inject(Router);

  onSubmit() {
    this.router.navigate(['/OTPVerification']).then(r => scroll(0,0));
  }
}

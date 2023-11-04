import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('shake', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('shaking', style({ transform: 'translateX(5px)' })),
      transition('normal => shaking', animate('300ms ease-in-out')),
    ]),
  ],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  animationState: string = 'normal';

  login() {
    // Implement your login logic here
    if (this.username === 'yourUsername' && this.password === 'yourPassword') {
      // Successful login
      console.log('Login successful');
    } else {
      // Failed login, trigger the shake animation
      this.animationState = 'shaking';

      // Reset the animation after a brief delay
      setTimeout(() => {
        this.animationState = 'normal';
      }, 300);
    }
  }
}

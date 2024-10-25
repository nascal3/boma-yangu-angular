import {Component, inject} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCard,
    MatButton
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  authService = inject(AuthService);
  router = inject(Router)

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}

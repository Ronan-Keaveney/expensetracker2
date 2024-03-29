import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isRonan: boolean = false;
  constructor(public authService: AuthService, private router: Router) {
    this.checkIfRonan();
  }

    onLogout() {
      this.authService.logout();
      this.router.navigate(['/login']); // Redirect to the login page or home page
    }

    private checkIfRonan(): void {
      const user = this.authService.isAuthenticated()
    }
}

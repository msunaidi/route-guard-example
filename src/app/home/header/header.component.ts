import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuCollapsed = true;

  constructor(public authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }
}

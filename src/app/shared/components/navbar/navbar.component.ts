import { Component } from '@angular/core';
import {
  RouterLink,
  RouterModule,
  RouterOutlet,
  Router,
  NavigationStart,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showNavbar: boolean = false;
  navbarList = [
    {
      icon: 'bx bx-home',
      text: 'INÍCIO',
      path: '/home',
    },
    {
      icon: 'bx bx-calendar',
      text: 'AGENDAMENTOS',
      path: '/schedule',
    },
    {
      icon: 'bx bx-phone',
      text: 'CENTRAL',
      path: '/central',
    },
    {
      icon: 'bx bx-user',
      text: 'PERFIL',
      path: '/profile',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((res: NavigationStart) => {
        if(res.url === '/login' || res.url === '/signup' || res.url === '/forgot') {
          this.showNavbar = false
        } else {
          this.showNavbar = true
        }
      });
  }
}

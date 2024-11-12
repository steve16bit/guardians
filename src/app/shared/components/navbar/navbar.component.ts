import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  actualRoute = window.location.pathname;
navbarList = [
  {
    icon: "bx bx-home",
    text: "INÍCIO"
  },
  {
    icon: "bx bx-calendar",
    text: "AGENDAMENTOS"
  },
  {
    icon: "bx bx-phone",
    text: "CENTRAL"
  },
  {
    icon: "bx bx-user",
    text: "PERFIL"
  },
]
}

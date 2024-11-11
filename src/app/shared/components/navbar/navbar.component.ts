import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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

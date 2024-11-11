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
    icon: "mdi mdi-test",
    text: "INÍCIO"
  },
  {
    icon: "mdi mdi-test",
    text: "AGENDAMENTOS"
  },
  {
    icon: "mdi mdi-test",
    text: "CENTRAL"
  },
  {
    icon: "mdi mdi-test",
    text: "PERFIL"
  },
]
}

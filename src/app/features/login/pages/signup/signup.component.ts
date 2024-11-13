import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private router: Router) {}

  signUp(event: Event) {
    event.preventDefault();
    Swal.fire({
      title: 'Cadastro realizado com sucesso 😀',
      text: 'Seja bem-vindo!',
      icon: 'success',
      confirmButtonText: 'Entrar',
    }).then((res) => {
      if (res.isConfirmed) {
        this.router.navigate(['/home']);
      }
    });
  }
}

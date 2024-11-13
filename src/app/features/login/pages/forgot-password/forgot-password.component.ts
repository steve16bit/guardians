import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor(private router: Router){}
  
  sendEmail(event: Event) {
    event.preventDefault();
    Swal.fire({
      title: 'Recuperação de Senha',
      text: 'Um link de recuperação foi enviado para o seu e-mail.',
      icon: 'success',
      confirmButtonText: 'Voltar ao login'
    }).then((res) => {
      if(res.isConfirmed) {
        this.router.navigate(['/login'])
      }
    });
  }
}

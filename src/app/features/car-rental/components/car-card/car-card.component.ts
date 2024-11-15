import { Component, Input } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
})
export class CarCardComponent {
  @Input() image?: string = '';
  @Input() name?: string = '';
  @Input() year?: string = '';
  @Input() type?: string = '';
  @Input() engine?: string = '';
  @Input() size?: string = '';

  constructor() {}

  ngOnInit(): void {
  }
}

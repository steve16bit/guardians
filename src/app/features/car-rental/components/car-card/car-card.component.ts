import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {
  @Input() image?: string = "";
  @Input() name?: string = "";
  @Input() year?: string = "";
  @Input() type?: string = "";
  @Input() engine?: string = "";
  @Input() size?: string = "";

  ngOnInit(): void {
    console.log("CHEGUEI AQUI")
  }
}

import { Component, Input } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import type { carCard } from '../../../../shared/types/rental-car/car-card.type';
import { SchedulerStoreService } from '../../stores/scheduler.store.service';

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
  @Input() price?: string = '';

  constructor(private schedulerStoreService: SchedulerStoreService) { }

  ngOnInit(): void {

  }
  
  selectedCar(image?: string, name?: string, price?: string) {
    console.log('Carro selecionado', {
      image,
      name,
      price
    }
    );
    
    this.schedulerStoreService.setCar(image, name, price)
  }
}

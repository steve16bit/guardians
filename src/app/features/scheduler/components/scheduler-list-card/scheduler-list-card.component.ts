import { Component, Input } from '@angular/core';
import type { carCard } from '../../../../shared/types/rental-car/car-card.type';

@Component({
  selector: 'app-scheduler-list-card',
  standalone: true,
  imports: [],
  templateUrl: './scheduler-list-card.component.html',
  styleUrl: './scheduler-list-card.component.scss',
})
export class SchedulerListCardComponent {
  @Input() data: carCard = {
    image: '',
    name: '',
    year: '',
    type: '',
    engine: '',
    size: '',
    price: '',
  };
}

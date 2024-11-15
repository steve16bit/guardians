import { Component, Input } from '@angular/core';
import { SchedulerListCardComponent } from "../../components/scheduler-list-card/scheduler-list-card.component";
import type { carCard } from '../../../../shared/types/rental-car/car-card.type';
import { cars } from '../../../../shared/api/cars';

@Component({
  selector: 'app-schedules-list',
  standalone: true,
  imports: [SchedulerListCardComponent],
  templateUrl: './schedules-list.component.html',
  styleUrl: './schedules-list.component.scss'
})
export class SchedulesListComponent {
  @Input() data: carCard[] = cars;
}

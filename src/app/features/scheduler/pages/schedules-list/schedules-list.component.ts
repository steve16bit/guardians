import { Component, Input } from '@angular/core';
import { SchedulerListCardComponent } from "../../components/scheduler-list-card/scheduler-list-card.component";
import type { carCard } from '../../../../shared/types/rental-car/car-card.type';
import { cars } from '../../../../shared/api/cars';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-schedules-list',
  standalone: true,
  imports: [SchedulerListCardComponent, RouterLink, RouterOutlet],
  templateUrl: './schedules-list.component.html',
  styleUrl: './schedules-list.component.scss'
})
export class SchedulesListComponent {
  @Input() data: any = cars;

  ngOnInit(): void {
    this.data = cars;
    // let actualData = localStorage.getItem('scheduleData');

    // if (actualData) {
    //   this.data = JSON.parse(actualData);
    // }

    // console.log('THIS.DATA', this.data);
  }
}

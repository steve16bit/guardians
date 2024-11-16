import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
} from '@ng-select/ng-select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CarouselComponent } from '../../../car-rental/components/car-carousel/carousel.component';
import type { carCard } from '../../../../shared/types/rental-car/car-card.type';
import { cars } from '../../../../shared/api/cars';
import { SchedulerStoreService } from '../../../car-rental/stores/scheduler.store.service';
import { avaibleHours } from '../../../../shared/api/hours';
import { locations } from '../../../../shared/api/locations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduler-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    CarouselComponent,
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './scheduler-form.component.html',
  styleUrl: './scheduler-form.component.scss',
})
export class SchedulerFormComponent {
  readonly schedule = new FormGroup({
    location: new FormControl<string | null>(null),
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
    takeoutHour: new FormControl<string | null>(null),
    returnHour: new FormControl<string | null>(null)
  });

  data: carCard[] = cars;
  avaibleHours: { text: string, value: string }[] = avaibleHours;
  locations: { text: string, value: string }[] = locations;
  scheduleData: string[] = [];

  constructor(private schedulerStoreService: SchedulerStoreService, private router: Router) { }

  ngOnInit(): void {
    let actualData = localStorage.getItem('scheduleData');
    actualData && this.scheduleData.push(actualData);

    if (this.scheduleData) {
      console.log('parsedData', JSON.parse(this.scheduleData[0]))
    }
  };

  createSchedule() {
    let carData: any = {
      location: this.schedule.value.location,
      start: this.schedule.value.start,
      end: this.schedule.value.end,
      takeoutHour: this.schedule.value.takeoutHour,
      returnHour: this.schedule.value.returnHour,
      selectedCar: this.schedulerStoreService.selectedCar.value,
      image: this.schedulerStoreService.selectedCar.value.image,
      name: this.schedulerStoreService.selectedCar.value.name,
      price: this.schedulerStoreService.selectedCar.value.price
    };

    console.log('car data', this.scheduleData);
    console.log('schedule data', this.scheduleData);

    this.scheduleData.push(carData);

    console.log('ALL DATA', this.scheduleData)


    localStorage.setItem('scheduleData', JSON.stringify(this.scheduleData))
    // this.router.navigate(['schedule/list'])
  }
}

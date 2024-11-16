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
    location: new FormControl<string>(''),
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
    takeoutHour: new FormControl<string>(''),
    returnHour: new FormControl<string>(''),
    car: new FormControl<number>(0),
  });

  data: carCard[] = cars;
  avaibleHours: { text: string, value: string }[] = avaibleHours;
  locations: { text: string, value: string }[] = locations;

  constructor(private schedulerStoreService: SchedulerStoreService) { }

  ngOnInit(): void {
  };

  createSchedule() {
    console.log(this.schedule);
    console.log(this.schedulerStoreService.selectedCar.value)
  }
}

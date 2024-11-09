import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-car-rental-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './car-rental-home.component.html',
  styleUrl: './car-rental-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarRentalHomeComponent {
  autoplayConfig = { delay: 3000, disableOnInteraction: false };
}

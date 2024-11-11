import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarCardComponent } from "../../components/car-card/car-card.component";
import { CarouselComponent } from "../../components/car-carousel/carousel.component";
import type { carCard } from '../../../../shared/types/rental-car/car-card.type';
import { cars } from '../../../../shared/api/cars';

@Component({
  selector: 'app-car-rental-home',
  standalone: true,
  imports: [
    CommonModule,
    CarCardComponent,
    CarouselComponent
],
  templateUrl: './car-rental-home.component.html',
  styleUrl: './car-rental-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarRentalHomeComponent {
  data: carCard[] = cars;
  autoplayConfig = { delay: 3000, disableOnInteraction: false };
}

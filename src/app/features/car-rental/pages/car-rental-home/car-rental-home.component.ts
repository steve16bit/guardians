import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { CarouselComponent } from '../../components/car-carousel/carousel.component';
import type { carCard } from '../../../../shared/types/rental-car/car-card.type';
import { cars } from '../../../../shared/api/cars';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FilterStoreService } from '../../stores/filter.store.service';
import type { CarFilterOptions } from '../../../../shared/types/rental-car/car-filter-options.type';

@Component({
  selector: 'app-car-rental-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    CarCardComponent,
    CarouselComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './car-rental-home.component.html',
  styleUrl: './car-rental-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarRentalHomeComponent {
  data: carCard[] = cars;
  autoplayConfig = { delay: 3000, disableOnInteraction: false };
  filtersData: CarFilterOptions = {
    engine: [{ text: '', value: '' }],
    size: [{ text: '', value: '' }],
    type: [{ text: '', value: '' }],
  };

  constructor(private filterStoreService: FilterStoreService) {}

  ngOnInit(): void {
    this.filtersData = this.filterStoreService.filters.value;

    if (
      this.filtersData.engine &&
      this.filtersData.size &&
      this.filtersData.type &&
      this.filtersData.engine?.length > 1 &&
      this.filtersData.size.length > 1 &&
      this.filtersData.type.length > 1
    ) {
      this.data.filter(
        (item) =>
          this.filtersData.engine &&
          this.filtersData.engine.map((engine) =>
            engine.value.includes(item.engine)
          )
      );
      this.data.filter(
        (item) =>
          this.filtersData.type &&
          this.filtersData.type.map((type) => type.value.includes(item.type))
      );
      this.data.filter(
        (item) =>
          this.filtersData.size &&
          this.filtersData.size.map((size) => size.value.includes(item.size))
      );
    }
    console.log('FILTROS', this.filterStoreService.filters.value);
  }

  handleSearch(event: Event) {
    let eventValue = (event.target as HTMLInputElement).value.toLowerCase();
    console.log('eventValue', eventValue.length < 1);

    if (eventValue.length < 1) {
      this.data = cars;
    }

    this.data = this.data.filter((item) => {
      return (
        item.name.toLowerCase().includes(eventValue) ||
        item.engine.toLowerCase().includes(eventValue) ||
        item.size.toLowerCase().includes(eventValue) ||
        item.type.toLowerCase().includes(eventValue) ||
        item.year.toString().includes(eventValue)
      );
    });
  }
}

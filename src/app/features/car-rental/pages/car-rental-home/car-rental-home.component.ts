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

  filteredData: carCard[] = [];
  isFiltered: boolean = false;

  constructor(private filterStoreService: FilterStoreService) { }

  ngOnInit(): void {
    this.filtersData = this.filterStoreService.filters.value;

    this.filterStoreService.filters.subscribe((res) => {
      this.filteredData = cars;
      this.data = cars;
      console.log('RES FILTER', res)
      if (res.engine && res.type && res.size) {
        this.isFiltered = true;
        this.filteredData = this.data.filter((item, index) => {
          const engineMatch = res.engine && res.engine[index]?.value !== '' ? item.engine.toLowerCase().includes(res.engine[index]?.value.toLowerCase()) : true;
          console.log("item", item.engine.toLowerCase())
          console.log("item", item.engine.toLowerCase())
          const typeMatch = res.type && res.type[index]?.value !== '' ? item.type.toLowerCase().includes(res.type[index]?.value.toLowerCase()) : true;
          const sizeMatch = res.size && res.size[index]?.value !== '' ? item.size.toLowerCase().includes(res.size[index]?.value.toLowerCase()) : true;
          console.log('ITENS FILTRADOS', engineMatch && typeMatch && sizeMatch);
          return engineMatch && typeMatch && sizeMatch; 
        });
      }
    })
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

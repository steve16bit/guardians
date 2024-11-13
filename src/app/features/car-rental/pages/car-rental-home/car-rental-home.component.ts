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
    RouterOutlet
  ],
  templateUrl: './car-rental-home.component.html',
  styleUrl: './car-rental-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarRentalHomeComponent {
  data: carCard[] = cars;
  autoplayConfig = { delay: 3000, disableOnInteraction: false };

  ngOnInit(): void {
    const engineFilter = this.data.filter((item) => ['1.8', '1.6'].includes(item.engine))
    const nameFilter = this.data.filter((item) => ['Fiorino', 'Doblo'].includes(item.name))
    const sizeFilter = this.data.filter((item) => ['7', '2'].includes(item.size))
    const typeFilter = this.data.filter((item) => ['Utilitário leve', 'Minivan'].includes(item.type))
    const yearFilter = this.data.filter((item) => ['1.8', '1.6'].includes(item.year))

    

    console.log(
      // engineFilter.concat(nameFilter).concat(sizeFilter).concat(typeFilter).concat(yearFilter)
      {engineFilter, nameFilter, sizeFilter, typeFilter, yearFilter}
    );
  }

  handleSearch(event: Event) {
    let eventValue = (event.target as HTMLInputElement).value.toLowerCase();
    console.log('eventValue',eventValue.length < 1);

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

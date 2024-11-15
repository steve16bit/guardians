import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  signal,
} from '@angular/core';
import type { carCard } from '../../../../shared/types/rental-car/car-card.type';
import { CarCardComponent } from '../car-card/car-card.component';
import type { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-car-carousel',
  standalone: true,
  imports: [CarCardComponent, RouterLink, RouterOutlet],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  swiperElement = signal<SwiperContainer | null>(null);

  @Input() data: carCard[] = [
    {
      image: '',
      name: '',
      year: '',
      type: '',
      engine: '',
      size: '',
      price: ''
    },
  ];

  ngOnInit(): void {
    console.log('DATA CAROUSEL', this.data)
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      loop: false,
      speed: 1000,
      autoplay: true,
      slidesPerView: 1.7,
      centeredSlides: true,
      spaceBetween: 20,
      breakpoints: {
        360: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
        390: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
        398: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
        430: {
          slidesPerView: 1.8,
          spaceBetween: 5,
        },
        454: {
          slidesPerView: 1.9,
          spaceBetween: 10,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}

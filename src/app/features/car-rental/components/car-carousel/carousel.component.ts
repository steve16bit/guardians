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

@Component({
  selector: 'app-car-carousel',
  standalone: true,
  imports: [CarCardComponent],
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
    },
  ];

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      loop: true,
      speed: 1000,
      autoplay: true,
      slidesPerView: 1.7,
      centeredSlides: true,
      spaceBetween: 60,
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}

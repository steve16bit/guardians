import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { CarFilterOptions } from '../../../shared/types/rental-car/car-filter-options.type';
import { cars } from '../../../shared/api/cars';
import type { carCard } from '../../../shared/types/rental-car/car-card.type';
import type { carFilter } from '../../../shared/types/rental-car/car-filter.type';

@Injectable({
  providedIn: 'root'
})
export class FilterStoreService {
  filters = new BehaviorSubject<CarFilterOptions>({
    engine: [{ text: '', value: '' }],
    size: [{ text: '', value: '' }],
    type: [{ text: '', value: '' }]
  });

  constructor() { }

  ngOnInit(): void {
  }

  updateFilters(filterType: string, event: carFilter[]) {
    console.log({filterType, event})
    if(filterType === 'engine') this.filters.next({engine: event});
    if(filterType === 'size') this.filters.next({size: event});
    if(filterType === 'type')this.filters.next({type: event});
  };

  applyFilters() {
    this.filters
  }
}
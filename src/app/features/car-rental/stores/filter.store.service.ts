import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { CarFilterOptions } from '../../../shared/types/rental-car/car-filter-options.type';
import type { carFilter } from '../../../shared/types/rental-car/car-filter.type';

@Injectable({
  providedIn: 'root',
})
export class FilterStoreService {
  filters = new BehaviorSubject<CarFilterOptions>({
    engine: [],
    size: [],
    type: [],
  });

  constructor() {}

  ngOnInit(): void {
    
  }

  updateFilters(filterType: string, event: carFilter[]) {
    if (filterType === 'engine')
      this.filters.next({
        engine: event,
        size: this.filters.value.size,
        type: this.filters.value.type,
      });
    if (filterType === 'size')
      this.filters.next({
        size: event,
        engine: this.filters.value.engine,
        type: this.filters.value.type,
      });
    if (filterType === 'type')
      this.filters.next({
        type: event,
        size: this.filters.value.size,
        engine: this.filters.value.engine,
      });
  }

  applyFilters() {
    this.filters.subscribe((res) => {
      console.log('teste', res)
    })
  }

  removeFilters() {
    this.filters.next({
      engine: [],
      type: [],
      size: [],
    });
  }

  ngOnDestroy(): void {
    // this.filters.next({});
    this.filters.unsubscribe();
  }
}

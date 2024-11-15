import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import type { carFilter } from '../../../../shared/types/rental-car/car-filter.type';
import { FilterStoreService } from '../../stores/filter.store.service';
import type { CarFilterOptions } from '../../../../shared/types/rental-car/car-filter-options.type';
import { engines, sizes, types } from '../../../../shared/api/filters';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule, MatCheckboxModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  types: carFilter[] = types;
  engines: carFilter[] = engines;
  sizes: carFilter[] = sizes;

  selectedEngines: carFilter[] = [];
  selectedSizes: carFilter[] = [];
  selectedTypes: carFilter[] = [];

  filtersData: CarFilterOptions = {
    engine: [],
    size: [],
    type: [],
  };

  isFiltered: boolean = false;

  constructor(
    private filterStoreService: FilterStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filtersData = this.filterStoreService.filters.value;
    console.log(this.filtersData);

    this.getFiltersData();
  }

  getFiltersData() {
    if (
      (this.filtersData.engine && this.filtersData.engine.length > 0) ||
      (this.filtersData.type && this.filtersData.type.length > 0) ||
      (this.filtersData.size && this.filtersData.size.length > 0)
    ) {
      this.isFiltered = true;
      this.filtersData.engine?.map((item, index) => {
        this.engines = this.engines.filter(filter => filter.value !== item.value);
      })

      this.filtersData.type?.map((item, index) => {
        this.types = this.types.filter(filter => filter.value !== item.value);
      })

      this.filtersData.size?.map((item, index) => {
        this.sizes = this.sizes.filter(filter => filter.value !== item.value);
      })

      console.log('filter', this.filtersData.engine),
      console.log('filter', this.filtersData.type),
      console.log('filter', this.filtersData.size)

      this.engines.unshift(...this.filtersData.engine ?? []),
      this.types.unshift(...this.filtersData.type ?? []),
      this.sizes.unshift(...this.filtersData.size ?? [])
      
      console.log(this.engines);
      console.log(this.types);
      console.log(this.sizes);

      return {
        engines: this.engines,
        types: this.types,
        sizes: this.sizes,
      } 
    }

    return {
      engines: this.engines,
      types: this.types,
      sizes: this.sizes
    };
  }

  applyFilters() {
    this.filterStoreService.applyFilters();
    this.router.navigate(['/home']);
  }

  closeFilters() {
    this.router.navigate(['/home']);
  }

  removeFilters() {
    this.filterStoreService.removeFilters();

    this.engines
      .filter((item) => item.selected === true)
      .map((item) => (item.selected = false));
    this.types
      .filter((item) => item.selected === true)
      .map((item) => (item.selected = false));
    this.sizes
      .filter((item) => item.selected === true)
      .map((item) => (item.selected = false));

    this.selectedEngines = [];
    this.selectedSizes = [];
    this.selectedTypes = []; 

    // this.router.navigate(['/home']);
  }

  selectEngine(event: carFilter, index: number) {
    if (this.engines[index].selected === true) {
      this.engines[index].selected = false;
      return;
    }
    this.engines[index].selected = true;
    this.selectedEngines.push(event);
    this.filterStoreService.updateFilters('engine', this.selectedEngines);
  }

  selectSize(event: carFilter, index: number) {
    if (this.sizes[index].selected === true) {
      this.sizes[index].selected = false;
      return;
    }
    this.sizes[index].selected = true;
    this.selectedSizes.push(event);
    this.filterStoreService.updateFilters('size', this.selectedSizes);
  }

  selectType(event: carFilter, index: number) {
    if (this.types[index].selected === true) {
      this.types[index].selected = false;
      return;
    }
    this.types[index].selected = true;
    this.selectedTypes.push(event);
    this.filterStoreService.updateFilters('type', this.selectedTypes);
  }
}

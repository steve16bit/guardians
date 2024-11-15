import { Component } from '@angular/core';
import { Router, RouterOutlet, type Route } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import type { carFilter } from '../../../../shared/types/rental-car/car-filter.type';
import { FilterStoreService } from '../../stores/filter.store.service';
import type { CarFilterOptions } from '../../../../shared/types/rental-car/car-filter-options.type';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule, MatCheckboxModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  types: carFilter[] = [
    { text: 'Hatch compacto', value: 'Hatch compacto', selected: false },
    { text: 'Hatch médio', value: 'Hatch médio', selected: false },
    { text: 'SUV compacto', value: 'SUV compacto', selected: false },
    { text: 'SUV médio', value: 'SUV médio', selected: false },
    { text: 'SUV grande', value: 'SUV grande', selected: false },
    { text: 'Crossover', value: 'Crossover', selected: false },
    { text: 'Coupé', value: 'Coupé', selected: false },
    { text: 'Picape leve', value: 'Picape leve', selected: false },
    { text: 'Picape leve-média', value: 'Picape leve-média', selected: false },
    { text: 'Picape média', value: 'Picape média', selected: false },
    { text: 'Sedan Compacto', value: 'Sedan Compacto', selected: false },
    { text: 'Sedan Médio', value: 'Sedan Médio', selected: false },
    { text: 'Sedan Grande', value: 'Sedan Grande', selected: false },
    {
      text: 'Minivan/monovolume',
      value: 'Minivan/monovolume',
      selected: false,
    },
    { text: 'Utilitário leve', value: 'Utilitário leve', selected: false },
    { text: 'Utilitário', value: 'Utilitário', selected: false },
  ];

  engines: carFilter[] = [
    { text: '1.0', value: '1.0', selected: false },
    { text: '1.4', value: '1.4', selected: false },
    { text: '1.6', value: '1.6', selected: false },
    { text: '1.8', value: '1.8', selected: false },
    { text: '2.0', value: '2.0', selected: false },
  ];

  sizes: carFilter[] = [
    { text: '2', value: '2', selected: false },
    { text: '3', value: '3', selected: false },
    { text: '4', value: '4', selected: false },
    { text: '5', value: '5', selected: false },
    { text: '6', value: '6', selected: false },
    { text: '7', value: '7', selected: false },
  ];

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

    this.router.navigate(['/home']);
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

import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import type { carFilter } from '../../../../shared/types/rental-car/car-filter.type';
import { FilterStoreService } from '../../stores/filter.store.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule, MatCheckboxModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  types: carFilter[] = [
    { text: 'Hatch compacto', value: 'Hatch compacto' },
    { text: 'Hatch médio', value: 'Hatch médio' },
    { text: 'SUV compacto', value: 'SUV compacto' },
    { text: 'SUV médio', value: 'SUV médio' },
    { text: 'SUV grande', value: 'SUV grande' },
    { text: 'Crossover', value: 'Crossover' },
    { text: 'Coupé', value: 'Coupé' },
    { text: 'Picape leve', value: 'Picape leve' },
    { text: 'Picape leve-média', value: 'Picape leve-média' },
    { text: 'Picape média', value: 'Picape média' },
    { text: 'Sedan Compacto', value: 'Sedan Compacto' },
    { text: 'Sedan Médio', value: 'Sedan Médio' },
    { text: 'Sedan Grande', value: 'Sedan Grande' },
    { text: 'Minivan/monovolume', value: 'Minivan/monovolume' },
    { text: 'Utilitário leve', value: 'Utilitário leve' },
    { text: 'Utilitário', value: 'Utilitário' },
  ];

  engines: carFilter[] = [
    { text: '1.0', value: '1.0' },
    { text: '1.4', value: '1.4' },
    { text: '1.6', value: '1.6' },
    { text: '1.8', value: '1.8' },
    { text: '2.0', value: '2.0' },
  ];

  sizes: carFilter[] = [
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' },
  ];

  constructor(private filterStoreService: FilterStoreService){}

  selectEngine(event: Event, index: number) {
    if (this.engines[index].selected === true) {
      this.engines[index].selected = false;
      return;
    }
    this.engines[index].selected = true;

    let selectedEngines: carFilter[] = [{
      text: '',
      value: '',
      selected: false
    }];
    
    selectedEngines.push(this.engines[index]);

    this.filterStoreService.updateFilters('engine', selectedEngines)

    console.log('Event', event);
    console.log('ENGINES', this.engines);
  }

  selectSize(event: Event, index: number) {
    if (this.sizes[index].selected === true) {
      this.sizes[index].selected = false;
      return;
    }
    this.sizes[index].selected = true;

    let selectedSizes: carFilter[] = [{
      text: '',
      value: '',
      selected: false
    }];
    
    selectedSizes.push(this.sizes[index]);

    this.filterStoreService.updateFilters('size', selectedSizes)

    console.log('Event', event);
    console.log('sizes', this.sizes);
  }

  selectType(event: carFilter, index: number) {
    if (this.types[index].selected === true) {
      this.types[index].selected = false;
      return;
    }
    this.types[index].selected = true;

    let selectedTypes: carFilter[] = [{
      text: '',
      value: '',
      selected: false
    }];
    
    selectedTypes.push(this.engines[index]);

    this.filterStoreService.updateFilters('type', selectedTypes)

    console.log('Event', event);
    console.log('types', this.types);
  }
}

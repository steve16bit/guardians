import type { carFilter } from "../types/rental-car/car-filter.type";

export const types: carFilter[] = [
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

export const engines: carFilter[] = [
  { text: '1.0', value: '1.0', selected: false },
  { text: '1.4', value: '1.4', selected: false },
  { text: '1.6', value: '1.6', selected: false },
  { text: '1.8', value: '1.8', selected: false },
  { text: '2.0', value: '2.0', selected: false },
];

export const sizes: carFilter[] = [
  { text: '2', value: '2', selected: false },
  { text: '3', value: '3', selected: false },
  { text: '4', value: '4', selected: false },
  { text: '5', value: '5', selected: false },
  { text: '6', value: '6', selected: false },
  { text: '7', value: '7', selected: false },
];

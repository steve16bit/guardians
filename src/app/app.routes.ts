import { Routes } from '@angular/router';
import { CarRentalHomeComponent } from './features/car-rental/pages/car-rental-home/car-rental-home.component';

export const routes: Routes = [
  { path: '', component: CarRentalHomeComponent }, // Rota que captura o ID
  { path: '', redirectTo: '/', pathMatch: 'full' } // Adicione uma rota padrão se necessário
];

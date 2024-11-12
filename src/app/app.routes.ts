import { Routes } from '@angular/router';
import { CarRentalHomeComponent } from './features/car-rental/pages/car-rental-home/car-rental-home.component';
import { LoginComponent } from './features/login/pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: CarRentalHomeComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' }
];

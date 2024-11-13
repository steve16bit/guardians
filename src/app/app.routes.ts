import { Routes } from '@angular/router';
import { CarRentalHomeComponent } from './features/car-rental/pages/car-rental-home/car-rental-home.component';
import { LoginComponent } from './features/account/pages/login/login.component';
import { ForgotPasswordComponent } from './features/account/pages/forgot-password/forgot-password.component';
import { SignupComponent } from './features/account/pages/signup/signup.component';
import { FilterComponent } from './features/car-rental/pages/filter/filter.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: CarRentalHomeComponent },
  { path: 'schedule', component: CarRentalHomeComponent },
  { path: 'central', component: CarRentalHomeComponent },
  { path: 'profile', component: CarRentalHomeComponent },
  { path: 'filter', component: FilterComponent },
];

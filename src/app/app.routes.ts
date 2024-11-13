import { Routes } from '@angular/router';
import { CarRentalHomeComponent } from './features/car-rental/pages/car-rental-home/car-rental-home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { SignupComponent } from './features/login/pages/signup/signup.component';
import { ForgotPasswordComponent } from './features/login/pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: CarRentalHomeComponent },
  { path: 'schedule', component: CarRentalHomeComponent },
  { path: 'central', component: CarRentalHomeComponent },
  { path: 'profile', component: CarRentalHomeComponent },
];

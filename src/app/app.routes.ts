import { Routes } from '@angular/router';
import { CarRentalHomeComponent } from './features/car-rental/pages/car-rental-home/car-rental-home.component';
import { LoginComponent } from './features/account/pages/login/login.component';
import { ForgotPasswordComponent } from './features/account/pages/forgot-password/forgot-password.component';
import { SignupComponent } from './features/account/pages/signup/signup.component';
import { FilterComponent } from './features/car-rental/pages/filter/filter.component';
import { SchedulerComponent } from './features/scheduler/pages/scheduler/scheduler.component';
import { CentralComponent } from './features/central/pages/central/central.component';
import { ProfileComponent } from './features/profile/pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: CarRentalHomeComponent },
  { path: 'schedule', component: SchedulerComponent },
  { path: 'central', component: CentralComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'filter', component: FilterComponent },
];

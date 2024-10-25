import { Routes } from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guards';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';


export const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pizzas', loadChildren: './pizza/pizza.module#PizzaModule'},
  {path: 'reservation', loadChildren: './reservation/reservation.module#ReservationModule'}
];

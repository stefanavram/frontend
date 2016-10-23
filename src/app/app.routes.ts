import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PizzasComponent} from './pizza/components/pizzas/pizzas.component';
export const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pizzas', component: PizzasComponent}
];

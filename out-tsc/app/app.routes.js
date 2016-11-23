import { HomeComponent } from './home/home.component';
export var ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'pizzas', loadChildren: './pizza/pizza.module#PizzaModule' },
    { path: 'reservation', loadChildren: './reservation/reservation.module#ReservationModule' }
];
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/app.routes.js.map
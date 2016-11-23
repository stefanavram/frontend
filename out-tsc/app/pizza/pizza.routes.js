import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzaResolver } from './services/pizza.resolver';
export var ROUTES = [
    {
        path: 'pizzas', children: [
            { path: '', component: PizzasComponent },
            { path: ':id', component: PizzaComponent, resolve: { pizza: PizzaResolver } }]
    }
];
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/pizza/pizza.routes.js.map
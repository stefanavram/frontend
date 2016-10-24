import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../domain/pizza';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent implements OnInit {

  private pizza: Pizza;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.forEach((data: {pizza: Pizza}) => {
      console.log(data);
      this.pizza = data.pizza;
    });
  }
}

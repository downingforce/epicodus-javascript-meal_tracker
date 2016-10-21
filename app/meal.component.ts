import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  template: `
  <div>
    <h3>{{ meal.name }}</h3>
    <h3>{{ meal.description }}</h3>
    <h3>{{ meal.calories }}</h3>
    <hr>
  </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
}

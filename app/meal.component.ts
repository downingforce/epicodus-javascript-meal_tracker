import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  template: `
  <div>
    <h3>Dish Name: {{ meal.name }}</h3>
    <h3>Meal Description: {{ meal.description }}</h3>
    <h3>Calories {{ meal.calories }}</h3>
  </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
}

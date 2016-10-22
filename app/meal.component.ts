import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  template: `
  <div>
    <h4>Dish Name: {{ meal.name }}</h4>
    <h4>Meal Description: {{ meal.description }}</h4>
    <h4>Calories {{ meal.calories }}</h4>
  </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
}

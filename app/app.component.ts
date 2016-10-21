import {Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Time</h1>
    <meal-list [childMealList]='masterMealList'></meal-list>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("poulet bonne femme", "delicious", 450),
      new Meal("cafe au lait", "ole!", 90),
      new Meal("bouillabaisse", "dabest", 622),
      new Meal("baguette", "the crunchy kind", 200)
  ];
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList">
      <meal-display [meal]="currentMeal"></meal-display>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}

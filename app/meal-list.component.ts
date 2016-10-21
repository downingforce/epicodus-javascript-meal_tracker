import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="over500">Over 500</option>
      <option value="under500" selected="selected">Under 500</option>
    </select>
    <div *ngFor="let currentMeal of childMealList | filterMeals:selectedMeals">
      <meal-display [meal]="currentMeal"></meal-display>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  public selectedMeals: string = "";

  onChange(targetValue) {
    this.selectedMeals = targetValue;
  }

}

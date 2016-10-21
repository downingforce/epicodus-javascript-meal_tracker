import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: "meal-edit",
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Edit Dish Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Edit Meal Description:</label>
        <input [(ngModel)]="childSelectedMeal.description">
      </div>
      <div>
        <label>Edit Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class MealEditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

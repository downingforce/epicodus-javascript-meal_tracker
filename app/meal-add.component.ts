import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: "meal-add",
  template: `
    <h3>Add a New Meal</h3>
    <div>
      <label>Add the name of the Dish</label>
      <input #mealName>
      <label>Add a Description of the Meal</label>
      <input #mealDescription>
      <label>Number of Calories</label>
      <input #mealCalories>
      <button (click)="createButtonClicked(mealName.value, mealDescription.value, mealCalories.value); mealName.value=''; mealDescription.value=''; mealCalories.value='';">Add a Meal</button>
    </div>
  `
})

export class MealAddComponent {
  @Output() newMealSender = new EventEmitter()
  createButtonClicked (name: string, description: string, calories: number) {
    var newMeal: Meal = new Meal (name, description, calories);
    this.newMealSender.emit(newMeal);
    console.log(newMeal);
  }
}

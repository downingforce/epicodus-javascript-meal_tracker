import {Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="col-sm-6">
    <h1>Meal Time</h1>
    <div class="container">
      <meal-list [childMealList]='masterMealList' (clickSender)='showDetails($event)'></meal-list>
      <hr>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="mealStats">
      <h3>Total Calories: {{totalCalories()}}</h3>
      <h3>Calorie Average: {{mealAverage()}}</h3>
    </div>
    <meal-add (newMealSender)="createMeal($event)"></meal-add>
    <meal-edit [childSelectedMeal]="selectedMeal" (doneClickedSender)="editMeal()"></meal-edit>
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

  selectedMeal: Meal = null;

  showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }

  createMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  editMeal() {
    this.selectedMeal = null;
  }

  totalCalories() {
    var total: number = 0;
    for (var i = 0; i < this.masterMealList.length; i++){
      total += this.masterMealList[i].calories;
    }
    return total;
  }

  mealAverage () {
    return (this.totalCalories()/this.masterMealList.length);
  }
}

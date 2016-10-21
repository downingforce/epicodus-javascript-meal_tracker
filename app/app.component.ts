import {Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Time</h1>
    <meal-add (newMealSender)="createMeal($event)"></meal-add>
    <hr>
    <meal-list [childMealList]='masterMealList' (clickSender)='showDetails($event)'></meal-list>
    <meal-edit [childSelectedMeal]="selectedMeal" (doneClickedSender)="editMeal()"></meal-edit>
    <hr>
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
}

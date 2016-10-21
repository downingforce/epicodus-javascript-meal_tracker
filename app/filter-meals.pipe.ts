import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "filterMeals",
  pure: false
})

export class FilterMealsPipe implements PipeTransform {

  transform(input: Meal[], calorieCount) {
    var output: Meal[] = [];
    if(calorieCount === "over500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieCount === "under500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

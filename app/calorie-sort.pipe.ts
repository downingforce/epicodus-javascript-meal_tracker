import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "sortCalories",
  pure: false
})

export class SortCaloriesPipe implements PipeTransform {

  transform(input: Meal[], sortFilter) {
    if (sortFilter === "low") {
      input.sort(function(a,b) {
        return a.calories-b.calories;
      })
    } else if (sortFilter === "high") {
      input.sort(function(a,b) {
        return b.calories-a.calories;
      })
    }
    return input;
  }
}

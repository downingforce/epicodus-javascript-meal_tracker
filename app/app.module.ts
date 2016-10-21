import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { MealAddComponent } from './meal-add.component';
import { MealEditComponent } from './meal-edit.component';
import { FormsModule }   from '@angular/forms';
import { FilterMealsPipe } from './filter-meals.pipe';
import { SortCaloriesPipe } from './calorie-sort.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, MealListComponent, MealComponent, MealAddComponent, MealEditComponent, FilterMealsPipe, SortCaloriesPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

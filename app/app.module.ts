import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { MealAddComponent } from './meal-add.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, MealListComponent, MealComponent, MealAddComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

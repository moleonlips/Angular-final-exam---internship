import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingListComponent } from './component/dinamic/shopping-list/shopping-list.component';
import { RecipesComponent } from './component/dinamic/recipes/recipes.component';
import { RecipesListComponent } from './component/dinamic/recipes/recipes-list/recipes-list.component';
import { RecipesAddEditComponent } from './component/dinamic/recipes/recipes-add-edit/recipes-add-edit.component';
import { RecipeDetailComponent } from './component/dinamic/recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesAddEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

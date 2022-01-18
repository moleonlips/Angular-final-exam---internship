import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './component/dinamic/recipes/recipe-detail/recipe-detail.component';
import { RecipesAddEditComponent } from './component/dinamic/recipes/recipes-add-edit/recipes-add-edit.component';
import { RecipesComponent } from './component/dinamic/recipes/recipes.component';
import { ShoppingListComponent } from './component/dinamic/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      {
        path: 'add-edit', component: RecipesAddEditComponent,
      },
      {
        path: ':param', component: RecipeDetailComponent,
      },
      {
        path: 'add-edit/:param', component: RecipesAddEditComponent,
      },
    ]

  },

  {
    path: 'shopping-list', component: ShoppingListComponent
  },

  { path: '', redirectTo: 'recipes', pathMatch: 'full', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

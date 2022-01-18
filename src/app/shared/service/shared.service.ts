import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from 'src/app/model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  recipes: Recipe[] = JSON.parse(localStorage.getItem('RECIPES')!) || [];
  ingredients = JSON.parse(localStorage.getItem('IGD')!) || []
  _recipes = new Subject<Recipe[]>()
  _ingredients = new Subject<any[]>()

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this._recipes.next(this.recipes)
    localStorage.setItem('RECIPES', JSON.stringify(this.recipes))
    setTimeout(() => {
    }, 1);
  }

  deleteRecipe(id:string){
    for(let i = 0; i < this.recipes.length; i++){
      if(this.recipes[i].id === id) {
        this.recipes.splice(i, 1);
      }
    }
    this._recipes.next(this.recipes)
    localStorage.setItem('RECIPES', JSON.stringify(this.recipes))
    setTimeout(() => {
    }, 1);
  }

  editRecipe(idR: string, r: Recipe){
    for(let i = 0; i < this.recipes.length; i++){
      if(this.recipes[i].id === idR) {
        this.recipes.splice(i, 1, r);
      }
    }
    this._recipes.next(this.recipes)
    localStorage.setItem('RECIPES', JSON.stringify(this.recipes))
    setTimeout(() => {
    }, 1);
  }

  please = new Subject<boolean>();

  nextPlease(){
    setTimeout(() => {
      this.please.next(false)
    }, 1);
  }

  toShoppingList(rid: string){
    let igd = this.recipes.filter(item => item.id === rid)[0].ingredients
    this.ingredients.push(...igd);
    localStorage.setItem('IGD', JSON.stringify(this.ingredients))
    this._ingredients.next(this.ingredients)
  }

  addIgd(igd: any){
    this.ingredients.push(igd);
    
    localStorage.setItem('IGD', JSON.stringify(this.ingredients))
    setTimeout(() => {
      this._ingredients.next(this.ingredients)
    }, 1);
  }

  clearIgd(){
    this.ingredients = []
    setTimeout(() => {
      this._ingredients.next(this.ingredients)
    }, 1);
    localStorage.removeItem('IGD')
  }

  updateIgd(index: number, newQTT: number){
    this.ingredients[index].quantity = newQTT
    localStorage.setItem('IGD', JSON.stringify(this.ingredients))
    setTimeout(() => {
      this._ingredients.next(this.ingredients)
    }, 1);
  }

  deleteIge(index:number) {
    this.ingredients.splice(index, 1)
    localStorage.setItem('IGD', JSON.stringify(this.ingredients))
    setTimeout(() => {
      this._ingredients.next(this.ingredients)
    }, 1);
  }


  constructor() { }
}

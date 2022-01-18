import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  constructor(private service: SharedService) { }

  recipes: Recipe[] = JSON.parse(localStorage.getItem('RECIPES')!) || []

  ngOnInit(): void {
    this.service._recipes.subscribe(data => {this.recipes = data});
  }
  
}

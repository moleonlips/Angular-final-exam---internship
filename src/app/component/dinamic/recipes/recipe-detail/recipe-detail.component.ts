import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    private activated: ActivatedRoute,
    private service: SharedService,
    private router: Router
  ) { }

  recipe!: Recipe

  ngOnInit(): void {
    const listR: Recipe[] = JSON.parse(localStorage.getItem('RECIPES')!) 
    this.service.nextPlease()

    this.activated.params.subscribe(params => {
      this.recipe = listR.filter(item => {
        return item.id === params['param']
      })[0]
    })
  }

  toShoppingList(rid: any) {
    this.service.toShoppingList(rid)
  }


  deleteRecipe(id: string) {
    this.service.deleteRecipe(id)
    this.router.navigate(['/recipes'])
  }

  edit(id:string) {
    this.router.navigate(['/recipes/add-edit', id])
  }
}

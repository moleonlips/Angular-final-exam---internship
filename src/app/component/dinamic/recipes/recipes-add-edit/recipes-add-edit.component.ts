import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-recipes-add-edit',
  templateUrl: './recipes-add-edit.component.html',
  styleUrls: ['./recipes-add-edit.component.css']
})
export class RecipesAddEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    private router: Router,
    private activated: ActivatedRoute
  ) { }

  recipeFrm!: FormGroup;

  url = ''

  ce = true

  rdmID = Math.random().toString()

  ngOnInit(): void {
    this.activated.params.subscribe(params => {
      if(params['param']){
        this.ce = false
        const recipe = this.service.recipes.filter(item => item.id === params['param'])[0]
        this.recipeFrm = this.fb.group({
          id: this.fb.control(params['param']),
          name: this.fb.control(recipe.name, Validators.required),
          imageURL: this.fb.control(recipe.imageURL, Validators.required),
          description: recipe.description,
          ingredients: this.fb.array([])
        })
        for(let i = 0; i<recipe.ingredients.length; i++){
          const qtt = this.fb.group({
            name: this.fb.control(recipe.ingredients[i].name, Validators.required),
            quantity: this.fb.control(recipe.ingredients[i].quantity, [Validators.required, Validators.min(1)])
          })
          this.ingredients.push(qtt)
        }
      }
      else{
        
        this.recipeFrm = this.fb.group({
          id: this.fb.control(this.rdmID),
          name: this.fb.control('', Validators.required),
          imageURL: this.fb.control('', Validators.required),
          description: '',
          ingredients: this.fb.array([])
        })
      }
    })
    this.url = this.recipeFrm.get('imageURL')?.value

    this.service.nextPlease()
  }

  get ingredients(): FormArray {
    return this.recipeFrm.get('ingredients') as FormArray
  }

  editRecipe(){
    const idR = this.recipeFrm.get('id')?.value
    this.service.editRecipe(idR, this.recipeFrm.value)
    this.recipeFrm.reset()
    this.router.navigate(['/recipes/add-edit'])
  }


  addIngredient() {
    const qtt = this.fb.group({
      name: this.fb.control('', Validators.required),
      quantity: this.fb.control(1, [Validators.required, Validators.min(1)])
    })
    this.ingredients.push(qtt)
  }

  delfield(i:number) {
    this.ingredients.removeAt(i)
  }


  urlPress(e: any) {
    this.url = e.target.value;
  }

  createRecipe(recipeFrm: any) {
    this.service.addRecipe(recipeFrm.value)
    this.recipeFrm.reset()
    this.url = ''
    this.router.navigate(['/recipes'])
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private service: SharedService
  ) { }

  isParent = true;

  ngOnInit(): void {
    this.service.please.subscribe(data => this.isParent = data)
  }

  newRecipe() {
    this.service.nextPlease()
    this.router.navigate(['/recipes/add-edit'])
  }
}

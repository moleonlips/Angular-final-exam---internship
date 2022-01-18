import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesAddEditComponent } from './recipes-add-edit.component';

describe('RecipesAddEditComponent', () => {
  let component: RecipesAddEditComponent;
  let fixture: ComponentFixture<RecipesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

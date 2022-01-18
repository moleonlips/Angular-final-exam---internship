import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(
    private service: SharedService,
    private fb: FormBuilder
  ) { }

  newItem = true

  igdForm!: FormGroup;

  IGD:any = JSON.parse(localStorage.getItem('IGD')!) || []

  ngOnInit(): void {
    this.igdForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      quantity: this.fb.control(0, [Validators.required, Validators.min(0)]),
    })
  }

  clearIgd(){
    this.igdForm.reset()
  }

  clearIgd2() {
    this.igdForm.get('quantity')?.setValue(0)
  }

  addIgd(igdForm:any){
    this.service.addIgd(igdForm.value)
    this.igdForm.reset()
    this.service._ingredients.subscribe(data => this.IGD = data)
  }

  indexItem!:number

  selectIgd(item: any, i: number){
    this.indexItem = i+1
    this.igdForm.get('name')?.setValue(item.name)
    this.igdForm.get('quantity')?.setValue(item.quantity)
    this.newItem = false
  }

  updateIgd(){
    const index = this.indexItem - 1
    const newQtt = this.igdForm.get('quantity')?.value
    this.service.updateIgd(index, newQtt)
    this.service._ingredients.subscribe(data => this.IGD = data)
    this.indexItem = 0
    this.igdForm.reset()
    this.newItem = true
  }

  deleteIgd() {
    if(this.indexItem){

      this.service.deleteIge(this.indexItem - 1)
      this.service._ingredients.subscribe(data => this.IGD = data)
      this.indexItem = 0
      this.igdForm.reset()
      this.newItem = true
    }
  }
}

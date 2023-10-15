import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChocolateService } from 'src/app/service/chocolate.service';
import {Chocolate} from "../../../model/chocolate.model";

@Component({
  selector: 'app-add-chocolate',
  templateUrl: './add-chocolate.component.html',
  styleUrls: ['./add-chocolate.component.css']
})
export class AddChocolateComponent implements OnInit {

  constructor(private chocolateService: ChocolateService, private router: Router) { }
  public chocolate: Chocolate = new Chocolate();
  public allInredients: string[] = [];
  public allInredientsList: { value: string, checked: boolean }[] = [];
  public inredients: string[] = [];
  public newIngredient: string = '';
  
  ngOnInit(): void {
    this.loadAllInredients()
  }

  public addChocolate() {
    this.chocolateService.addChocolate(this.chocolate).subscribe(res => {
        if(res.name){
        alert("You have added chocolate successfully!");
        }else{
          alert(res)
        }
      })
    }

  
    private loadAllInredients() {
      this.chocolateService.getAllIngredients().subscribe(res => {
        this.allInredients = res;
        this.allInredientsList = this.allInredients.map(str => ({
          value: str,
          checked: false
        }))
      });
    }

    public onIngridientsckboxChange(item: { value: string, checked: boolean }): void {
      if (item.checked) {
        this.chocolate.ingredients.push(item.value);
        
      } else {
        const index = this.chocolate.ingredients.indexOf(item.value);
        if (index !== -1) {
          this.chocolate.ingredients.splice(index, 1);
        }
      }
    }

    addNewIngredient() {
      // Check if newIngredient is not empty
      if (this.newIngredient) {
        // Add your logic to send the content to your function
        // For example, you can call a function here
      //  this.yourFunction(this.newIngredient);
    
        // Clear the input field
        this.newIngredient = '';
      }
    }

}

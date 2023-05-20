import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ChocolateService } from 'src/app/service/chocolate.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ingredinats-preferance',
  templateUrl: './ingredinats-preferance.component.html',
  styleUrls: ['./ingredinats-preferance.component.css']
})
export class IngredinatsPreferanceComponent implements OnInit {

  public inredients: string[] = [];
  public favouriteInredients: string[] = [];
  public dislikedInredients: string[] = [];

  public favouriteList: { value: string, checked: boolean }[] = [];
  public dislikedList: { value: string, checked: boolean }[] = [];





  constructor(private userService: UserService, private chocolateService: ChocolateService, private formBuilder: FormBuilder) {
    this.loadAllInredients();
  }

  
  ngOnInit(): void {

  }

  private loadAllInredients() {
    this.chocolateService.getAllIngredients().subscribe(res => {
      this.inredients = res;
      this.loadFavouriteIngredients();
      this.loadDislikedIngredients();
    });
  }

  private loadFavouriteIngredients(){
    this.userService.getAllFavouriteIngredients().subscribe(res => {
      this.favouriteInredients = res
      
      this.initializeFavouriteChecklist();
    });

  }

  private loadDislikedIngredients(){
    this.userService.getAllDislikedIngredients().subscribe(res => {
      
      this.dislikedInredients = res
      
      this.initializeDislikedChecklist();
    });

  }




  public onFavouriteCheckboxChange(item: { value: string, checked: boolean }): void {
    if (item.checked) {
      this.addFavouriteIngredient(item.value);
      
    } else {
      this.removeFavouriteIngredient(item.value);
    }
  }

  public onDislikedCheckboxChange(item: { value: string, checked: boolean }): void {
    if (item.checked) {
      this.addDislikedIngredient(item.value);
      
    } else {
      this.removeDislikedIngredient(item.value);
    }
  }

  private initializeFavouriteChecklist(): void {

    this.favouriteList = this.inredients.map(str => ({
      value: str,
      checked: this.favouriteInredients.includes(str)
    }));
    console.log(this.favouriteList)
  }

  
  private initializeDislikedChecklist(): void {
    this.dislikedList = this.inredients.map(str => ({
      value: str,
      checked: this.dislikedInredients.includes(str)
    }));
  }

  private addFavouriteIngredient(ingredient : string){
    
    this.userService.addFavouriteIngredient(ingredient).subscribe(res => {
      
    });

  }  
  

  private removeFavouriteIngredient(ingredient : string){
    
    this.userService.removeFavouriteIngredient(ingredient).subscribe(res => {
      
    });

  }  


  private addDislikedIngredient(ingredient : string){
    
    this.userService.addDislikedIngredient(ingredient).subscribe(res => {
      
    });

  }  
  

  private removeDislikedIngredient(ingredient : string){
    
    this.userService.removeDislikedIngredient(ingredient).subscribe(res => {
      
    });

  }  



}

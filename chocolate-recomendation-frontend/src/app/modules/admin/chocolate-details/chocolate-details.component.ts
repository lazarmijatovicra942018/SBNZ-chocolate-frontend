import { Component, OnInit } from '@angular/core';
import { ChocolateService } from 'src/app/service/chocolate.service';
import { Chocolate } from "../../../model/chocolate.model";
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {FormControl, Validators} from "@angular/forms";
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-chocolate-details',
  templateUrl: './chocolate-details.component.html',
  styleUrls: ['./chocolate-details.component.css']
})
export class ChocolateDetailsComponent implements OnInit {

  public chocolateName: any;
  public chocolate: Chocolate = new Chocolate();
  public discountAmount : number = 0;

  constructor(private route: ActivatedRoute,private router: Router, private chocolateService: ChocolateService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadChocolateWithAmount();

  }


  public loadChocolateWithAmount(){
    this.chocolateService.getChocolateByNameWithAmount(this.chocolateName, 0).subscribe(res => {
      this.chocolate = res;
      
      this.chocolate.ingredients.forEach((ingredient: string) => {
        if (this.chocolate.allIngredients != null) {
          this.chocolate.allIngredients = this.chocolate.allIngredients + ' , ' + ingredient
        } else {
          this.chocolate.allIngredients = ingredient
        }

        console.log(this.chocolate);
      });

    });
    
  }



 

  public close() {
    this.dialog.closeAll();
  }

  public ammountOfNewDiscount(event: any) {
    if (event.target.value < 0) {
      alert("Discount amount must be positive number !")
      event.target.value = null
    } else {
      if(!event.target.value){
        this.discountAmount = 0;
      }else{
      this.discountAmount = event.target.value;
      }
      
    }
  }
  
  addNewRule(){
    if(this.discountAmount ==0){
      alert("Discount amount must be grater than zero !")
    }else{
    this.chocolateService.addRule(this.chocolateName, this.discountAmount).subscribe();
    this.discountAmount = 0;
    alert("New discount successfully added !")
    }
  }


  


}

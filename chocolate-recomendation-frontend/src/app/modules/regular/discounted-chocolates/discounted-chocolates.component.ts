import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChocolateService } from 'src/app/service/chocolate.service';
import { Chocolate } from "../../../model/chocolate.model";
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChocolateDetailsComponent } from '../chocolate-details/chocolate-details.component';



@Component({
  selector: 'app-discounted-chocolates',
  templateUrl: './discounted-chocolates.component.html',
  styleUrls: ['./discounted-chocolates.component.css']
})
export class DiscountedChocolatesComponent implements OnInit {

  public dataSource = new MatTableDataSource<Chocolate>();
  public displayedColumns = ['name', 'manufacturer', 'price', 'priceAll', 'discount', 'amount', 'ingredients' , 'grade', 'mygrade'];
  public disable: boolean = false;
  public amount : number = 0;

  constructor( public dialog: MatDialog ,private chocolateService: ChocolateService, private router: Router) { }

  ngOnInit(): void {
    this.loadChocolatesWithAmount(this.amount);
  }

 

  public loadChocolatesWithAmount(amount: number): void {
    this.chocolateService.getDiscountedChocolatesWithAmount(amount).subscribe(res => {
      this.dataSource.data = res;

      for (const c of this.dataSource.data) {
        this.setStars(c);
        c.ingredients.forEach((ingredient: string) => {
          if (c.allIngredients != null) {
            c.allIngredients = c.allIngredients + ' , ' + ingredient
          } else {
            c.allIngredients = ingredient
          }
        });
      }
    });
  }

  public getDiscount(event: any) {
    
    if (event.target.value < 0) {
      alert("Amount must be positive number")
      event.target.value = null
    } else {
      if(!event.target.value){
        this.amount = 0;
      }else{
      this.amount = event.target.value;
      }
      this.loadChocolatesWithAmount(this.amount);
    }
  }

  getFullStars(grade: number): number[] {
    if(grade%1>=0.75){ grade +=1;}
    const fullStars = Math.floor(grade);
    return Array(fullStars).fill(0);
  }
  
  hasHalfStar(grade: number): boolean {
    const decimalPart = grade % 1;
    return decimalPart > 0.25 && decimalPart < 0.75 || (grade<=0.26 && grade> 0);
  }
  
  getEmptyStars(grade: number): number[] {
    if(grade%1<=0.25  && grade%1>0 && grade > 1
      ){ 
        grade -=1;}
    const emptyStars = 5 - Math.ceil(grade);
    return Array(emptyStars).fill(0);
  }

  setGrade(chocolate: any, star: number): void {
    this.disable = true;
    chocolate.myGrade = star;
    this.chocolateService.gradeChocolate(chocolate).subscribe(res =>
    this.loadChocolatesWithAmount(this.amount)
    );
   // this.setStars(chocolate)
    

  }


  setStars(chocolate: any):void{
    if(chocolate.myGrade==0){
      chocolate.stars= [];
      chocolate.emptyStars= [1, 2, 3, 4, 5];
    }else if(chocolate.myGrade==1){
      chocolate.stars= [1];
      chocolate.emptyStars= [2, 3, 4, 5];
    }else if(chocolate.myGrade==2){
      chocolate.stars= [1, 2];
      chocolate.emptyStars= [3, 4, 5];
    }else if(chocolate.myGrade==3){
      chocolate.stars= [1, 2, 3];
      chocolate.emptyStars= [4, 5];
    }else if(chocolate.myGrade==4){
      chocolate.stars= [1, 2, 3, 4];
      chocolate.emptyStars= [5];
    }else if(chocolate.myGrade==5){
      chocolate.stars= [1, 2, 3, 4, 5];
      chocolate.emptyStars= [];
    }

  }


    chocolateDetails(chocolateName: string) {
      
    const dialogConfig = new MatDialogConfig();
    

    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.width = "600px";
    dialogConfig.disableClose = true;

    const modalDialog = this.dialog.open(ChocolateDetailsComponent, dialogConfig);
    modalDialog.disableClose =true
    modalDialog.componentInstance.chocolateName = chocolateName;

  }


  public undisable(){
    this.disable = false;
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChocolateService } from 'src/app/service/chocolate.service';
import { Chocolate } from "../../../model/chocolate.model";
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-discounted-chocolates',
  templateUrl: './discounted-chocolates.component.html',
  styleUrls: ['./discounted-chocolates.component.css']
})
export class DiscountedChocolatesComponent implements OnInit {

  public dataSource = new MatTableDataSource<Chocolate>();
  public displayedColumns = ['name', 'manufacturer', 'price', 'priceAll', 'discount', 'ammount', 'ingredients' , 'grade', 'mygrade'];
  stars: number[] = [];
  emptyStars: number[] = [1, 2, 3, 4, 5];

  constructor(private chocolateService: ChocolateService, private router: Router) { }

  ngOnInit(): void {
    this.loadChocolates()
  }


  public loadChocolates(): void {
    this.chocolateService.getDiscountedChocolatesWithAmmount(0).subscribe(res => {
      this.dataSource.data = res;

      for (const c of this.dataSource.data) {
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
      alert("Ammount must be positive number")
      event.target.value = null
    } else {


      this.chocolateService.getDiscountedChocolatesWithAmmount(event.target.value).subscribe(res => {
        this.dataSource.data = res;
        for (const c of this.dataSource.data) {
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
    if(grade%1<0.25  && grade <0.25 && grade>0){ grade -=1;}
    const emptyStars = 5 - Math.ceil(grade);
    return Array(emptyStars).fill(0);
  }

  setGrade(chocolate: any, star: number): void {
    chocolate.myGrade = star;
    this.setStars(chocolate)

  }


  setStarsForEmpty(emtyStar: number): void{
    if((this.stars.length+ emtyStar)==1){
      this.stars= [1];
    }else if((this.stars.length+ emtyStar)==2){
      this.stars= [1, 2];
    }else if((this.stars.length+ emtyStar)==3){
      this.stars= [1, 2, 3];
    }else if((this.stars.length+ emtyStar)==4){
      this.stars= [1, 2, 3, 4];
    }else if((this.stars.length+ emtyStar)==5){
      this.stars= [1, 2, 3, 4, 5];
    }  
  }

  setStars(chocolate: any):void{
    if(chocolate.myGrade==1){
      this.stars= [1];
      this.emptyStars= [2, 3, 4, 5];
    }else if(chocolate.myGrade==2){
      this.stars= [1, 2];
      this.emptyStars= [3, 4, 5];
    }else if(chocolate.myGrade==3){
      this.stars= [1, 2, 3];
      this.emptyStars= [4, 5];
    }else if(chocolate.myGrade==4){
      this.stars= [1, 2, 3, 4];
      this.emptyStars= [5];
    }else if(chocolate.myGrade==5){
      this.stars= [1, 2, 3, 4, 5];
      this.emptyStars= [];
    }

  }

}

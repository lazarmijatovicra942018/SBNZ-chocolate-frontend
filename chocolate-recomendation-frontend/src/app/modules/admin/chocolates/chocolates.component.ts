import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChocolateService } from 'src/app/service/chocolate.service';
import { Chocolate } from "../../../model/chocolate.model";
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChocolateDetailsComponent } from '../chocolate-details/chocolate-details.component';

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})
export class ChocolatesComponent implements OnInit {

  public dataSource = new MatTableDataSource<Chocolate>();
  public displayedColumns = ['name', 'manufacturer', 'price', 'ingridients' , 'grade'];
  constructor( public dialog: MatDialog , private chocolateService: ChocolateService, private router: Router) { }


  ngOnInit(): void {
    this.loadChocolates()
  }
  public loadChocolates(): void {
    this.chocolateService.getChocolates().subscribe(res => {
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
}

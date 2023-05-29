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


  constructor(private route: ActivatedRoute,private router: Router, private chocolateService: ChocolateService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.chocolateService.getChocolateByName(this.chocolateName).subscribe(res => {
              this.chocolate = res;
              console.log(res);
              
              this.chocolate.ingredients.forEach((ingredient: string) => {
                if (this.chocolate.allIngredients != null) {
                  this.chocolate.allIngredients = this.chocolate.allIngredients + ' , ' + ingredient
                } else {
                  this.chocolate.allIngredients = ingredient
                }
              });

      });
      
  });

    

  }


  public close() {
    this.dialog.closeAll();
  }




}

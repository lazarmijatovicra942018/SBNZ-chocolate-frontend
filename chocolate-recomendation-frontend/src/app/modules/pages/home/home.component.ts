import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChocolateService } from 'src/app/service/chocolate.service';
import { Chocolate } from "../../../model/chocolate.model";
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataSource = new MatTableDataSource<Chocolate>();
  public displayedColumns = ['name', 'manufacturer', 'price', 'ingridients'];


  constructor(private chocolateService: ChocolateService, private router: Router) { }

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

}

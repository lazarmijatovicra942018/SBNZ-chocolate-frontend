import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChocolateService } from 'src/app/service/chocolate.service';
import {Chocolate} from "../../../model/chocolate.model";
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-discounted-chocolates',
  templateUrl: './discounted-chocolates.component.html',
  styleUrls: ['./discounted-chocolates.component.css']
})
export class DiscountedChocolatesComponent implements OnInit {

  public dataSource = new MatTableDataSource<Chocolate>();
  public displayedColumns = ['name' , 'manufacturer' , 'price' ,'priceAll', 'discount' ,'ammount', 'ingrediants'];
  
  
  constructor(private chocolateService: ChocolateService, private router: Router) { }

  ngOnInit(): void {
    this.loadChocolates()
  }


  public loadChocolates(): void {
    this.chocolateService.getDiscountedChocolatesWithAmmount(0).subscribe(res => {
      this.dataSource.data = res;
        
        for(const c of this.dataSource.data){
            c.ingrediants.forEach((ingrediant: string) => {
              if(c.allIngrediants!= null){
                c.allIngrediants = c.allIngrediants + ' , '+ ingrediant 
              }else{
                c.allIngrediants = ingrediant
            }    
            });  
        }
      });
        

  }

  public getDiscount(event: any) {
      if(event.target.value<0){
        alert("Ammount must be positive number")
        event.target.value  = null
      }else{
      

      this.chocolateService.getDiscountedChocolatesWithAmmount(event.target.value).subscribe(res => {
        this.dataSource.data = res;
        for(const c of this.dataSource.data){
            c.ingrediants.forEach((ingrediant: string) => {
              if(c.allIngrediants!= null){
                c.allIngrediants = c.allIngrediants + ' , '+ ingrediant 
              }else{
                c.allIngrediants = ingrediant
            }    
            });  
        }
      });
    }
  }




}

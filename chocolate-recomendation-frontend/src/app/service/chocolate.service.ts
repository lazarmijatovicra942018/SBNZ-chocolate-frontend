import { Injectable } from '@angular/core';
import {Chocolate} from "../model/chocolate.model";
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChocolateService {

  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient, private router: Router) { }

  getChocolates(): Observable<Chocolate[]> {
    return this.http.get<Chocolate[]>(this.apiHost + 'chocolates', {headers: this.headers});
  }
  getChocolatesUnregistered(): Observable<Chocolate[]> {
    return this.http.get<Chocolate[]>(this.apiHost + 'chocolates/unregistered', {headers: this.headers});
  }
  getChocolateByName(name: string): Observable<Chocolate> {
    return this.http.get<Chocolate>(this.apiHost + 'chocolates/find/'+name, {headers: this.headers});
  }
  getChocolateByNameWithAmount(name: string, amount: number): Observable<Chocolate> {
    return this.http.get<Chocolate>(this.apiHost + 'chocolates/find/'+name + '/'+ amount, {headers: this.headers});
  }
  getDiscountedChocolates(): Observable<Chocolate[]> {
    return this.http.get<Chocolate[]>(this.apiHost + 'chocolates/discount', {headers: this.headers});
  }
  getAllIngredients(): Observable<string[]> {
    return this.http.get<string[]>(this.apiHost + 'chocolates/ingredients', {headers: this.headers});
  }
  getDiscountedChocolatesWithAmount(amount : number): Observable<Chocolate[]> {
    return this.http.get<Chocolate[]>(this.apiHost + 'chocolates/discount/'+amount, {headers: this.headers});
  }
  gradeChocolate(chocolate: Chocolate): Observable<Chocolate[]> {
    return this.http.post<any>(this.apiHost + 'chocolates/grade/'+ chocolate.name +'/'+chocolate.myGrade, {headers: this.headers});
  }

  purchaseChocolate(chocolate: Chocolate): Observable<Chocolate[]> {
    return this.http.post<any>(this.apiHost + 'chocolates/purchase/'+ chocolate.name +'/'+chocolate.amount, {headers: this.headers});
  }
  
  addChocolate(chocolate: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'chocolate/add', chocolate, {headers: this.headers});
  }

  addRule(chocolateName: string , newDiscountAmmount: number): Observable<any> {
    return this.http.post<any>(this.apiHost + 'chocolates/rule/'+chocolateName+'/'+newDiscountAmmount, {headers: this.headers});
  }
}

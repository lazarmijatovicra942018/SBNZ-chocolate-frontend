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

  getDiscountedChocolates(): Observable<Chocolate[]> {
    return this.http.get<Chocolate[]>(this.apiHost + 'chocolates/discount', {headers: this.headers});
  }

  
  getDiscountedChocolatesWithAmmount(ammount : number): Observable<Chocolate[]> {
    return this.http.get<Chocolate[]>(this.apiHost + 'chocolates/discount/'+ammount, {headers: this.headers});
  }



}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient, private router: Router) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiHost + 'users', {headers: this.headers});
  }


  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/register', user, {headers: this.headers});
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/login', user, {headers: this.headers});

    
  }

  logoutUser(): void {
    this.http.post<any>(this.apiHost + 'users/logout',  {headers: this.headers});
    this.router.navigate(['/home']);
  }
  
  
  getAllFavouriteIngredients(): Observable<string[]> {
    return this.http.get<string[]>(this.apiHost + 'users/favourite/ingredients', {headers: this.headers});
  }

  addFavouriteIngredient(ingredient : string) {
    return this.http.put(this.apiHost + 'users/add/favourite/'+ingredient, {headers: this.headers});
  }

  removeFavouriteIngredient(ingredient : string) {
    return this.http.put(this.apiHost + 'users/remove/favourite/' + ingredient, {headers: this.headers});
  }

  
  getAllDislikedIngredients(): Observable<string[]> {
    return this.http.get<string[]>(this.apiHost + 'users/disliked/ingredients', {headers: this.headers});
  }

  
  addDislikedIngredient(ingredient : string) {
    return this.http.put(this.apiHost + 'users/add/disliked/'+ingredient, {headers: this.headers});
  }

  removeDislikedIngredient(ingredient : string) {
    return this.http.put(this.apiHost + 'users/remove/disliked/'+ ingredient, {headers: this.headers});
  }

  

}

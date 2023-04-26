import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiHost: string = 'http://localhost:8080/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiHost + 'users', {headers: this.headers});
  }


  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/register', user, {headers: this.headers});
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'users/login', user, {headers: this.headers});
  }
  
  


}

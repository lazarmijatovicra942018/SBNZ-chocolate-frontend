import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {Router} from "@angular/router";
import {User} from "../../../model/user.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public data: User = new User()

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(res => {
      alert(res[0].password);
      
      
    })
    
  }

}

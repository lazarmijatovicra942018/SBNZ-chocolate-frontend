import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.css']
})
export class RegularComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
  }


  logout(){
    this.userService.logoutUser()
  }

  public home(){
    this.router.navigate(['discounted/chocolates']);
  }
}

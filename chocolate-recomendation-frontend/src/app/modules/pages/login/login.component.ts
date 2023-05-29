import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import {User} from "../../../model/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public data: User = new User()


  ngOnInit(): void {
  }

  public login() {
    this.userService.loginUser(this.data).subscribe(res => {
        if(res.email){

          console.log(res)
        
          if(res.userType =='ADMINISTRATOR'){ 
            this.router.navigate(['/add/chocolate']);
          }else if(res.userType =='REGISTERED_USER'){ 
            if(res.firstTimeLogin){
              this.router.navigate(['/ingrediants/preferance']);
            }else{
            this.router.navigate(['/discounted/chocolates']);
            }
          } 

        }else{
          alert(res)
        }
    })
  }

}

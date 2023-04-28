import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import {User} from "../../../model/user.model";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public user: User = new User();
  public confirmationPass: string = '';

  ngOnInit(): void {
  
  }

  public registerUser() {
      if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.userService.registerUser(this.user).subscribe(res => {
          alert("You have successfully registered!");
        })
      }
      else
      {
      alert("You did not confirm your password!");
      }
    }
    else {
      alert("You must fill in all fields!")
    }
  }


  private isInputValid(): boolean {
    return this.user.phoneNum != ''
         && this.user.name != '' && this.user.surname != '' && this.user.password != ''
         && this.user.email != ''
  }

  private isPassConfirmed(): boolean {
    return this.user.password === this.confirmationPass;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredSurnameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])

  requiredUsernameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredPhoneNumberControl = new FormControl('', [
    Validators.required,
  ]);
 
}

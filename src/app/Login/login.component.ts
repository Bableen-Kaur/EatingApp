import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../Service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.components.scss"],
})
export class LoginComponent implements OnInit {
  error = null;
  userForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  Error: any;
  token: any;
  storage: any;
  loginLoader: boolean = false;
  constructor(
    private nav: Router,  
    private srv : AuthService
  ) {}

  ngOnInit(): void {
  }
  Authenticate() {

    console.log(this.userForm.valid);
    this.Error = undefined;

    this.loginLoader = true;
    
    if (this.userForm.valid) {
      this.srv.Login(this.userForm.value).subscribe((m) => {
        if (m.respStatus) {
          localStorage.setItem("user","this.userForm.value")
          this.loginLoader = false;
        } else {
          // this._snackBar.open('Email ID or Password is not valid', "Okay", {
            // duration: 3000,
          // });
          this.loginLoader = false;
        }
      });
    }
  }
}
  
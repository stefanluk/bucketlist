import { Component, OnInit } from '@angular/core';
import {AuthService} from "../providers/auth.service";
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth:AuthService, public router:Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  logIn(){
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    this.auth.loginWithEmailAndPassword(email, password);
  }

}

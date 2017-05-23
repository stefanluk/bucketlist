import { Component } from '@angular/core';
import {AuthService} from "./providers/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private isLoggedIn: boolean;
  private user_email: string;

  constructor(private auth:AuthService, public router:Router){
    this.auth.user.subscribe(auth => {
      if(auth == null){
        // not logged in
        this.isLoggedIn = false;
        this.user_email = '';
        this.router.navigate(['login'])
      } else {
        // logged in
        this.isLoggedIn = true;
        this.user_email = auth.email;
      }
    });
  }

  logOut(){
    this.auth.logOut();
    this.router.navigate(['login'])
  }
}

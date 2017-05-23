import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router:Router) {
    this.user = afAuth.authState;
  }

  loginWithEmailAndPassword(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((data) => {
      this.router.navigate(['']);
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // if (errorCode === 'auth/wrong-password') {
      //   alert('Wrong password.');
      // } else {
      //   alert(errorMessage);
      // }
      console.log(error);
    });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}

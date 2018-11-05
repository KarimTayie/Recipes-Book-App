import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthService {
  authUser = Object.keys(window.localStorage)
    .filter(item => item.startsWith('appkey'))[0];
  token: string = this.authUser ? this.authUser : null;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.signinUser(email, password);
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                localStorage.setItem('appkey', token);
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
    localStorage.removeItem('appkey');
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}

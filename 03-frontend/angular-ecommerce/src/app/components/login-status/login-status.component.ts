import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string = '';

  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthStateService, @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {
    // subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    )
  }

  getUserDetails() {
    if(this.isAuthenticated) {
      // fetch the logged in user details

      // user full name is expoed as a property name
      this.oktaAuth.getUser().then(
      (res) => {
        this.userFullName = res.name as string;
        const theEmail = res.email;
        this.storage.setItem('userEmail', JSON.stringify(theEmail));
      }
      );
    }
  }

  logout() {
    // ends session with okta and remove the tokens
    this.oktaAuth.signOut();
  }

}

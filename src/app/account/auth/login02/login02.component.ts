import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, UntypedFormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login02',
  templateUrl: './login02.component.html',
  styleUrls: ['./login02.component.scss'],
})
export class Login02Component implements OnInit {
  @ViewChild('loginform', { static: false }) loginform!: NgForm;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  onLoginSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
      }),
    };

    const reqObject = {
      username: username,
      password: password,
    };

    this.router.navigate(['/home/nav']);
  }
  //   const myObserver = {
  //     // The response data
  //     next: (response: any) => {
  //       // If the user authenticates successfully, we need to store the JWT returned in localStorage
  //       this.authService.setSessionStorage(response);
  //     },

  //     // If there is an error
  //     error: (err: Error) => {
  //       console.log(err);
  //     },

  //     // When observable completes
  //     complete: () => {
  //       console.log('done!');
  //       this.router.navigate(['/home/nav']);
  //     },
  //   };

  //   this.http
  //     .post('http://localhost:8080/auth/signin', reqObject, httpOptions)
  //     .subscribe(myObserver);

  //   // this.http
  //   //   .post(
  //   //     'https://git.heroku.com/nodejs01-app.git/auth/signin',
  //   //     reqObject,
  //   //     httpOptions
  //   //   )
  //   //   .subscribe(myObserver);

  //   //   // The response data
  //   //   response => {

  //   //     // If the user authenticates successfully, we need to store the JWT returned in localStorage
  //   //     this.authService.setSessionStorage(response);

  //   //   },

  //   //   // If there is an error
  //   //   error => {
  //   //     console.log(error);
  //   //   },

  //   //   // When observable completes
  //   //   () => {
  //   //     console.log('done!');
  //   //     this.router.navigate(['/home/nav']);
  //   //   }

  //   // );
  // }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {}
}

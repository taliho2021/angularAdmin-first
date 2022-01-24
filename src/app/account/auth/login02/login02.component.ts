import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login02',
  templateUrl: './login02.component.html',
  styleUrls: ['./login02.component.scss']
})
export class Login02Component implements OnInit {
  loginForm!: FormGroup;
  loading: boolean =false;
  submitted: boolean = false;
  error!: '';
  isLoggedIn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group  ({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.isLoggedIn = true;
      }

}

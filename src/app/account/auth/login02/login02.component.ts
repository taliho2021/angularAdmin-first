import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login02',
  templateUrl: './login02.component.html',
  styleUrls: ['./login02.component.scss']
})
export class Login02Component implements OnInit {
  loading: boolean =false;
  submitted: boolean = false;
  error!: '';
  isLoggedIn: boolean = false;

  loginForm = this.fb.group  ({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(7)]]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {

  }


  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        } else {
          // this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
          this.router.navigate(['/home/nav'])
          this.isLoggedIn = true

        }
      }
    }

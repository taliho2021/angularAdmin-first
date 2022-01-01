import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */

export class TopbarComponent implements OnInit {

  element:any;
  cookieValue:any;
  flagvalue:any;
  countryName: any;
  valueset: any;

  constructor( @Inject(DOCUMENT) private document: any,
                private router: Router,
                private auth: AuthService,
                ) { }

  openMobileMenu!: boolean ;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  ngOnInit(): void {
    this.openMobileMenu = false;
    this.element = this.document.documentElement;


  }

}

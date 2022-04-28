import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

import {AuthService} from '../../services/auth.service'
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SideBarMenuItem } from '../../layouts/sidebar/sidebar.menu.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit  {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  menuItem! : SideBarMenuItem[]
  constructor(private breakpointObserver: BreakpointObserver,
              private menuService: MenuService,
              private authService: AuthService,
              private route: Router) {}

  hasChild = (_: number, node: SideBarMenuItem) => !!node.children && node.children.length >0;

  public showDefaultMessage = true;

  ngOnInit(): void {
    this.menuService.getMenuitems().subscribe((data: SideBarMenuItem[]) =>
    {
      this.menuItem = data;
    })

    // this.route.navigate(['/dashboard'])

  }

  toggleDefaultMessage(state: boolean){
    this.showDefaultMessage = state;
  }

  logout(): void {
    this.authService.logout();
    this.route.navigate(['/'])
  }

  isLoggedIn = this.authService.isLoggedIn()
}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

import { MenuService } from '../services/menu.service';
import { Observable } from 'rxjs';
// Import interface
import { SideBarMenuItem } from '../layouts/sidebar/sidebar.menu.model';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class PagesComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    menuItem! : SideBarMenuItem[]
    constructor(private breakpointObserver: BreakpointObserver,
                private menuService: MenuService) {}

    hasChild = (_: number, node: SideBarMenuItem) => !!node.children && node.children.length >0;

    ngOnInit(): void {
      this.menuService.getMenuitems().subscribe((data: SideBarMenuItem[]) =>
      {
        this.menuItem = data;
      })
    }
  }




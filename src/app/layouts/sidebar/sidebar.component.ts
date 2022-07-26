import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {Router} from '@angular/router';
import { SideBarMenuItem } from '../../layouts/sidebar/sidebar.menu.model'
import { SidebarNavService } from './sidebar-nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})

export class SidebarComponent implements OnInit {

  expanded!: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input()  item!: SideBarMenuItem;
  @Input() depth!: number;

  constructor(public sidenav: SidebarNavService,
              public router: Router) {
                if (this.depth === undefined){
                  this.depth = 0;
               }
              }

  ngOnInit()  {
    this.sidenav.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item:SideBarMenuItem) {
    if (!this.item.children || !this.item.children.length) {
      this.router.navigate([this.item.route]);
      this.sidenav.closeNav();
    }
    if (this.item.children && this.item.children.length) {
      this.expanded = !this.expanded;
    }
  }
  }

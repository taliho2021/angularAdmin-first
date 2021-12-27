import { Component, OnInit } from '@angular/core';
import {
  LAYOUT_HORIZONTAL,
  LAYOUT_VERTICAL,
  LAYOUT_WIDTH,
  TOPBAR
} from './layouts.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // layout related config
  // layout related config
  layoutType!: string;
  layoutwidth!: string;
  topbar!: string;
  constructor() { }

  ngOnInit(): void {
     // default settings
     this.layoutType = LAYOUT_VERTICAL;
     this.layoutwidth = LAYOUT_WIDTH;
     this.topbar = TOPBAR;
  }

  /**
   * Check if the vertical layout is requested
   */
   isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }

}

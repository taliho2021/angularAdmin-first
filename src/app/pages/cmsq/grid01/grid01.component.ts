import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid01',
  templateUrl: './grid01.component.html',
  styleUrls: ['./grid01.component.scss']
})
export class Grid01Component {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Six', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Seven', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Eight', cols: 2, rows: 1, color: '#DDBDF1'},

  ];
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HTSDataSource, HTSItem } from './hts-datasource';
import { ColDef, GridApi,  RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-hts',
  templateUrl: './hts.component.html',
  styleUrls: ['./hts.component.scss']
})

interface HTS  {
  seqNo : Number,
  refNo: number,

}
export class HTSComponent  {
 
 rowData: HTS[] = [];

 gridOptions = {
    rowModelType: 'serverside',

    columnDefs: [
      {field: 'other'},
      {field: 'superior'},
      {field: 'description'},
      {field: 'quotaQuantity'},
      {field: 'special'},
      {field: 'htsno'},
      {field: 'additionalDuties'},
      {field: 'footnote'},
      {field: 'general'},
      {field: 'units'},

    ],

    defaultColDef : {
      sortable: true
    }
 } 

  constructor() {
   
  }

  
}

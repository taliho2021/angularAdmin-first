import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';
import { airImport } from '../../interfaces/airimport';
import AirImport from '../../../../assets/data/airImport.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ai-grid',
  templateUrl: './ai-grid.component.html',
  styleUrls: ['./ai-grid.component.scss'],
})
export class AiGridComponent {
  rowSelection: 'single' | 'multiple' = 'single';

  constructor(private route: ActivatedRoute, private router: Router) {}

  columnDefs: ColDef[] = [
    {
      field: 'seqNo',
      checkboxSelection: true,
    },
    { field: 'refNo' },
    {
      field: 'carrier',
      checkboxSelection: true,
    },
    { field: 'carrierName' },
    { field: 'flightNo1' },
    { field: 'locationCode' },
    { field: 'address1' },
    { field: 'refDate' },
    { field: 'user' },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  rowData: airImport[] = AirImport;
}

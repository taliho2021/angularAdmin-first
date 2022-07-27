import { Component } from '@angular/core';

interface HTS {
  seqNo: Number;
  refNo: number;
}

@Component({
  selector: 'app-hts',
  templateUrl: './hts.component.html',
  styleUrls: ['./hts.component.scss'],
})
export class HTSComponent {
  rowData: HTS[] = [];

  gridOptions = {
    rowModelType: 'serverside',

    columnDefs: [
      { field: 'other' },
      { field: 'superior' },
      { field: 'description' },
      { field: 'quotaQuantity' },
      { field: 'special' },
      { field: 'htsno' },
      { field: 'additionalDuties' },
      { field: 'footnote' },
      { field: 'general' },
      { field: 'units' },
    ],

    defaultColDef: {
      sortable: true,
    },
  };

  constructor() {}
}

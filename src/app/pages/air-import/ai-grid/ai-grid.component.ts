import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';
import Entry from '../../../../assets/data/entrySummary.json';
import { HttpClient } from '@angular/common/http';

interface ENTRY  {
  refNo: Number;
  entryNo: String;
  entryType: String;
  importer: String;
  mot: String;
  custRefNo: String;
  entryDate: String;
  rlseDate: String;
  stmtDate: String;
  entryPort: String;
  description: String;
  vessel: String;
  user: String;
  arAmt: String;
  apAmt: String
}
@Component({
  selector: 'app-ai-grid',
  templateUrl: './ai-grid.component.html',
  styleUrls: ['./ai-grid.component.scss']
})

export class AiGridComponent {

  rowSelection ='single'

  columnDefs: ColDef[] = [
    { field: 'refNo', sortable: true, filter: true, resizable: true, checkboxSelection: true  },
    { field: 'entryNo', sortable: true, filter: true, resizable: true },
    { field: 'entryType', sortable: true, filter: true, resizable: true, checkboxSelection: true },
    { field: 'importer', sortable: true, filter: true, resizable: true },
    { field: 'mot', sortable: true, filter: true, resizable: true },
    { field: 'custRefNo', sortable: true, filter: true, resizable: true },
    { field: 'entryDate', sortable: true, filter: true, resizable: true  },
    { field: 'rlseDate', sortable: true, filter: true, resizable: true  },
    { field: 'stmtDate', sortable: true, filter: true, resizable: true  },
    { field: 'entryPort', sortable: true, filter: true, resizable: true  },
    { field: 'description', sortable: true, filter: true, resizable: true  },
    { field: 'vessel', sortable: true, filter: true, resizable: true  },
    { field: 'user', sortable: true, filter: true, resizable: true  },
    { field: 'arAmt', sortable: true, filter: true, resizable: true},
    { field: 'apAmt', sortable: true, filter: true, resizable: true},
  ];

  rowData: ENTRY[] = Entry;

  constructor(private http: HttpClient) {
    console.dir(this.rowData);
     ;

  }
}

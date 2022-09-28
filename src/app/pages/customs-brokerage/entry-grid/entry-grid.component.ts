import { ActivatedRoute, Router } from '@angular/router';
import {
  ColDef,
  GridApi,
  RowClickedEvent,
  GridReadyEvent,
} from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';
import { entrySummary } from '../../interfaces/entrySummary';
import Entry from '../../../../assets/data/entrySummary.json';

@Component({
  selector: 'app-entry-grid',
  templateUrl: './entry-grid.component.html',
  styleUrls: ['./entry-grid.component.scss'],
})
export class EntryGridComponent {
  rowSelection: 'single' | 'multiple' = 'single';
  private gridApi!: GridApi;

  constructor(private route: ActivatedRoute, private router: Router) {}

  columnDefs: ColDef[] = [
    {
      field: 'refNo',
      sortable: true,
      filter: true,
      resizable: true,
      checkboxSelection: true,
    },
    { field: 'entryNo', sortable: true, filter: true, resizable: true },
    {
      field: 'entryType',
      sortable: true,
      filter: true,
      resizable: true,
      checkboxSelection: true,
    },
    { field: 'importer', sortable: true, filter: true, resizable: true },
    { field: 'mot', sortable: true, filter: true, resizable: true },
    { field: 'custRefNo', sortable: true, filter: true, resizable: true },
    { field: 'entryDate', sortable: true, filter: true, resizable: true },
    { field: 'rlseDate', sortable: true, filter: true, resizable: true },
    { field: 'stmtDate', sortable: true, filter: true, resizable: true },
    { field: 'entryPort', sortable: true, filter: true, resizable: true },
    { field: 'description', sortable: true, filter: true, resizable: true },
    { field: 'vessel', sortable: true, filter: true, resizable: true },
    { field: 'user', sortable: true, filter: true, resizable: true },
    { field: 'arAmt', sortable: true, filter: true, resizable: true },
    { field: 'apAmt', sortable: true, filter: true, resizable: true },
  ];

  rowData: entrySummary[] = Entry;

  onRowClicked(params: RowClickedEvent) {
    let refNo = params.node.data.refNo;
    // window.alert(refNo)     // Picks up correct ref #
    this.router.navigate([refNo], { relativeTo: this.route }); //Navigate to correct Url with selected Ref#
    // window.alert(refNo)   // refNo is correct here
    // const isf = Isf.find(i => i.reffNo === refNo)
    // console.log(isf);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.router.navigate([this.rowData[1].refNo], { relativeTo: this.route });
  }
}

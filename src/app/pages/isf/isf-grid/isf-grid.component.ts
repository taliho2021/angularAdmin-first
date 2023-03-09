import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { Component } from '@angular/core';

import { ISF } from '../../interfaces/isf';
import Isf from '../../../../assets/data/isf.json';
import { AgGridModule } from 'ag-grid-angular';

@Component({
    selector: 'app-isf-grid',
    templateUrl: './isf-grid.component.html',
    styleUrls: ['./isf-grid.component.scss'],
    standalone: true,
    imports: [AgGridModule]
})
export class IsfGridComponent {
  rowSelection: 'single' | 'multiple' = 'single';

  constructor(private route: ActivatedRoute, private router: Router) {}

  columnDefs: ColDef[] = [
    { field: 'seqNo' },
    { field: 'refNo', checkboxSelection: true },
    { field: 'fileNo' },
    { field: 'branch' },
    { field: 'status' },
    { field: 'disposition' },
    { field: 'type' },
    { field: 'shipmentType' },
    { field: 'actReason' },
    { field: 'importerCode' },
    { field: 'importerName' },
    { field: 'bondType' },
    { field: 'houseBL' },
    { field: 'regularBL' },
    { field: 'masterBL' },
    { field: 'oiRefNo' },
    { field: 'updatedDate' },
    { field: 'user' },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  rowData: ISF[] = Isf;

  onRowClicked(params: RowClickedEvent) {
    let refNo = params.node.data.refNo;
    // window.alert(refNo)     // Picks up correct ref #
    this.router.navigate([refNo], { relativeTo: this.route }); //Navigate to correct Url with selected Ref#
    // window.alert(refNo)   // refNo is correct here
    // const isf = Isf.find(i => i.reffNo === refNo)
    // console.log(isf);
  }
}

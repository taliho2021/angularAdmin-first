import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';

import { ISF } from '../../interfaces/isf'
import Isf from '../../../../assets/data/isf.json';

@Component({
  selector: 'app-isf-grid',
  templateUrl: './isf-grid.component.html',
  styleUrls: ['./isf-grid.component.scss']
})
export class IsfGridComponent  {

rowSelection = 'single'
private gridApi!: GridApi

constructor(private route: ActivatedRoute, private router: Router ) {}

columnDefs: ColDef[] = [
    { field: 'seqNo', sortable: true, filter: true, resizable: true  },
    { field: 'refNo', sortable: true, filter: true, resizable: true, checkboxSelection: true },
    { field: 'fileNo', sortable: true, filter: true, resizable: true },
    { field: 'branch', sortable: true, filter: true, resizable: true  },
    { field: 'status', sortable: true, filter: true, resizable: true  },
    { field: 'disposition', sortable: true, filter: true, resizable: true  },
    { field: 'type', sortable: true, filter: true, resizable: true  },
    { field: 'shipmentType', sortable: true, filter: true, resizable: true  },
    { field: 'actReason', sortable: true, filter: true, resizable: true  },
    { field: 'importerCode', sortable: true, filter: true, resizable: true  },
    { field: 'importerName', sortable: true, filter: true, resizable: true  },
    { field: 'bondType', sortable: true, filter: true, resizable: true},
    { field: 'houseBL', sortable: true, filter: true, resizable: true },
    { field: 'regularBL', sortable: true, filter: true, resizable: true  },
    { field: 'masterBL', sortable: true, filter: true, resizable: true  },
    { field: 'oiRefNo', sortable: true, filter: true, resizable: true  },
    { field: 'updatedDate', sortable: true, filter: true, resizable: true  },
    { field: 'user', sortable: true, filter: true, resizable: true  }

];

rowData : ISF[] = Isf;

onGridReady(params: GridReadyEvent){
  const refNo = Number(this.route.snapshot.paramMap.get('refNo'));
  this.router.navigate([this.rowData[refNo], {relativeTo: this.route}]);
  }
}

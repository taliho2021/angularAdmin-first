import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';
import Isf from '../../../../assets/data/isf.json';

interface ISF {
    seqNo : Number,
    refNo: Number,
    fileNo: String,
    branch : String,
    isfNo : String,
    status : String,
    disposition: String,
    type: any,
    shipmentType: String,
    actReason : String,
    importerCode : String,
    ImpIdtype : String,
    importerName : String,
    bondHolderId : String,
    bondActCode: String,
    bondtype: String,
    houseBL : String,
    regularBL: Number,
    masterBL: String,
    oiRefNo : String,
    updatedDate: String,
    user: String,
    invDate: String,
}

@Component({
  selector: 'app-isf-grid',
  templateUrl: './isf-grid.component.html',
  styleUrls: ['./isf-grid.component.scss']
})
export class IsfGridComponent  {

columnDefs: ColDef[] = [
    { field: 'id', sortable: true, filter: true, resizable: true  },
    { field: 'isfNo', sortable: true, filter: true, resizable: true, checkboxSelection: true },
    { field: 's', sortable: true, filter: true, resizable: true },
    { field: 'd', sortable: true, filter: true, resizable: true  },
    { field: 'type', sortable: true, filter: true, resizable: true  },
    { field: 'act', sortable: true, filter: true, resizable: true  },
    { field: 'h.b/l', sortable: true, filter: true, resizable: true  },
    { field: 'fileNo', sortable: true, filter: true, resizable: true  },
    { field: 'custRefNo', sortable: true, filter: true, resizable: true  },
    { field: 'importer', sortable: true, filter: true, resizable: true  },
];

rowData : ISF[] = Isf;
}

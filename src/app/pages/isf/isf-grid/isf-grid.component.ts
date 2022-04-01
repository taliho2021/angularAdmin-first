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
}

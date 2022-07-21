import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, GridApi,  RowClickedEvent } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';

import { ISF } from '../../interfaces/isf'
import Isf from '../../../../assets/data/isf.json';

@Component({
  selector: 'app-isf-grid',
  templateUrl: './isf-grid.component.html',
  styleUrls: ['./isf-grid.component.scss']
})
export class IsfGridComponent  {

rowSelection : 'single' | 'multiple' = 'single'
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

onRowClicked(params: RowClickedEvent){
  let refNo = params.node.data.refNo
  // window.alert(refNo)     // Picks up correct ref #
  this.router.navigate([(refNo)], {relativeTo: this.route});  //Navigate to correct Url with selected Ref#
  // window.alert(refNo)   // refNo is correct here
  // const isf = Isf.find(i => i.reffNo === refNo)
  // console.log(isf);

  }
}

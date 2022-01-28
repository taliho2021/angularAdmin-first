import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-air-ams-grid',
  templateUrl: './air-ams-grid.component.html',
  styleUrls: ['./air-ams-grid.component.scss']
})
export class AirAmsGridComponent  {

  columnDefs: ColDef[] = [
    { field: 'make', sortable: true, filter: true, resizable: true  },
    { field: 'model', sortable: true, filter: true, resizable: true },
    { field: 'price', sortable: true, filter: true, resizable: true },
    { field: 'year', sortable: true, filter: true, resizable: true  },
    { field: 'origin', sortable: true, filter: true, resizable: true  },
    { field: 'type', sortable: true, filter: true, resizable: true  },
    { field: 'dealer', sortable: true, filter: true, resizable: true  },
    { field: 'discount', sortable: true, filter: true, resizable: true  },
    { field: 'delivery date', sortable: true, filter: true, resizable: true  },
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
}

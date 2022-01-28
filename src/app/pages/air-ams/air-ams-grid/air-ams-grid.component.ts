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
    { field: 'deliveryDate', sortable: true, filter: true, resizable: true  },
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, year: 2022, origin: 'U.S', type: 'Sedan', dealer: 'Huntington', discount: 'None', deliveryDate: '2022-March' },
    { make: 'Ford', model: 'Mondeo', price: 32000, year: 2022, origin: 'U.S', type: 'Sedan', dealer: 'Huntington', discount: 'None', deliveryDate: '2022-March' },
    { make: 'Porsche', model: 'Boxter', price: 72000, year: 2022, origin: 'Germany', type: 'Coupe', dealer: 'Jericho', discount: '+ 10%', deliveryDate: '2022-March' },
    { make: 'Toyota', model: 'Camry', price: 35000, year: 2022, origin: 'U.S', type: 'Sedan', dealer: 'Huntington', discount: 'None', deliveryDate: '2022-March' },
    { make: 'Ford', model: 'Bronco', price: 52000, year: 2022, origin: 'U.S', type: 'Sedan', dealer: 'Huntington', discount: 'None', deliveryDate: '2022-March' },
    { make: 'Porsche', model: 'Cayenne', price: 102000, year: 2022, origin: 'Germany', type: 'Coupe', dealer: 'Jericho', discount: '+ 10%', deliveryDate: '2022-March' }
];
}

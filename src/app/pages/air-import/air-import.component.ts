import { ColDef } from 'ag-grid-community';
import { Component } from '@angular/core';
//Fetch remote data
import { HttpClient } from '@angular/common/http';
import  Ports  from '../../../assets/data/ports.json'

interface PORT  {
  No: number;
  ID: String;
  Code: String;
  Name: String;
  Addr1: String;
  Addr2: String;
  Addr3: String;
  City: String;
  State: String;
  Zip_Code: String;
  Carr: String;
  Unlading: String;
  S_Code: String;
  Firms: String;
  Exam_Site: String;
  Active: Number
}
@Component({
  selector: 'app-air-import',
  templateUrl: './air-import.component.html',
  styleUrls: ['./air-import.component.scss']
})

export class AirImportComponent {

  columnDefs: ColDef[] = [
    { field: 'No', sortable: true, filter: true, checkboxSelection: true },
    { field: 'ID', sortable: true, filter: true, checkboxSelection: true },
    { field: 'Code', sortable: true, filter: true},
    { field: 'Name', sortable: true, filter: true },
    { field: 'City', sortable: true, filter: true },
    { field: 'State', sortable: true, filter: true},
    { field: 'Zip_Code', sortable: true, filter: true }
];

// rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];

  rowData : PORT[] = Ports ;

  constructor(private http: HttpClient) {
    console.dir(this.rowData);
     ;

  }


}

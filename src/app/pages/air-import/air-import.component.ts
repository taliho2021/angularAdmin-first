import { ColDef } from 'ag-grid-community';
import { Component } from '@angular/core';
//Fetch remote data
import { HttpClient } from '@angular/common/http';
import  Ports  from '../../../assets/data/ports.json'
import { RouterLink } from '@angular/router';
import { AirImportDetailComponent } from './air-import-detail/air-import-detail.component';
import { AiGridComponent } from './ai-grid/ai-grid.component';
import { AirImportDashboardComponent } from './air-import-dashboard/air-import-dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

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
    styleUrls: ['./air-import.component.scss'],
    standalone: true,
    imports: [MatTabsModule, AirImportDashboardComponent, AiGridComponent, AirImportDetailComponent, RouterLink]
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

  rowData : PORT[] = Ports ;

  constructor(private http: HttpClient) {
    console.dir(this.rowData);
     ;

  }


}

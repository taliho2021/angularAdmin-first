import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';

export interface RowData{
   refNo: number;
   entryNo: string;
   entryType: string;
   importer: string;
   mot: string;
   custRefNo: string;
   entryDate: string;
   rlseDate: string;
   stmtDate: string;
   entryPort: string;
   description: string;
   vessel: string;
   user: string;
   arAmt: string;
   apAmt: string; }

@Component({
  selector: 'app-entry-grid',
  templateUrl: './entry-grid.component.html',
  styleUrls: ['./entry-grid.component.scss']
})
export class EntryGridComponent  {

rowSelection = 'single'
private gridApi!: GridApi

constructor(private route: ActivatedRoute, private router: Router ) {}


  columnDefs: ColDef[] = [
    { field: 'refNo', sortable: true, filter: true, resizable: true, checkboxSelection: true  },
    { field: 'entryNo', sortable: true, filter: true, resizable: true },
    { field: 'entryType', sortable: true, filter: true, resizable: true, checkboxSelection: true },
    { field: 'importer', sortable: true, filter: true, resizable: true },
    { field: 'mot', sortable: true, filter: true, resizable: true },
    { field: 'custRefNo', sortable: true, filter: true, resizable: true },
    { field: 'entryDate', sortable: true, filter: true, resizable: true  },
    { field: 'rlseDate', sortable: true, filter: true, resizable: true  },
    { field: 'stmtDate', sortable: true, filter: true, resizable: true  },
    { field: 'entryPort', sortable: true, filter: true, resizable: true  },
    { field: 'description', sortable: true, filter: true, resizable: true  },
    { field: 'vessel', sortable: true, filter: true, resizable: true  },
    { field: 'user', sortable: true, filter: true, resizable: true  },
    { field: 'arAmt', sortable: true, filter: true, resizable: true},
    { field: 'apAmt', sortable: true, filter: true, resizable: true},
  ];


   rowData =  [
      {refNo: 2270495, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270496, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270512, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270497, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270498, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270514, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270499, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270500, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270515, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270501, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270503, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270517, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270505, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270596, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270518, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270649, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270549, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270551, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270745, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270525, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270518, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270524, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270774, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270812, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270245, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270349, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270412, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270145, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270249, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270851, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270849, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270896, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270152, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270149, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270246, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270351, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2270245, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2271496, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2271512, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2271045, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2272046, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2273012, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2273049, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2273046, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2270351, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2272049, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2272046, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2272051, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
      {refNo: 2272095, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2272096, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2273052, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2273045, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2270396, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2274512, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2274495, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2274046, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2275051, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
         {refNo: 2275045, entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
         entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
      {refNo:  2275049, entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
         entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
      {refNo: 2275012, entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
         entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },

  ]

  onGridReady(params: GridReadyEvent){
    this.gridApi= params.api
    this.router.navigate([this.rowData[1].refNo], {relativeTo: this.route})
    }

}

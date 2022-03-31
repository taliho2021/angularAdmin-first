import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';
import EntrySummary from '../../../../assets/data/entrySummary.json';
import { HttpClient } from '@angular/common/http';

interface ENTRY  {
  refNo: Number;
  entryNo: String;
  entryType: Number;
  importer: String;
  mot: Number;
  custRefNo: String;
  entryDate: Date;
  rlseDate: Date;
  stmtDate: Date;
  entryPort: Number;
  description: String;
  vessel: String;
  user: String;
  arAmt: Number;
  apAmt: Number
}
@Component({
  selector: 'app-ai-grid',
  templateUrl: './ai-grid.component.html',
  styleUrls: ['./ai-grid.component.scss']
})

export class AiGridComponent {

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

  rowData: ENTRY[] = EntrySummary;

  constructor(private http: HttpClient) {
    console.dir(this.rowData);
     ;

  }
}

  // rowData = [
  //     {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },
  //        {refNo: '2270495'  , entryNo:'EH3-22704956' , entryType:'01' , importer:'CAPBLU' , mot:'40' , custRefNo:'CAP-NY-8-22' , entryDate:'01/25/2022' , rlseDate:'01/25/2022' , stmtDate:'02/07/2022' ,
  //        entryPort:'4701' , description:'Live Flounder' , vessel: 'KE',  user:'plim' , arAmt:'405.70' , apAmt: '69.50' },
  //     {refNo:  '2270496', entryNo: 'EH3-22704964', entryType:'01' , importer: 'CAPBLU', mot:'40' , custRefNo:'SI-62683' , entryDate: '01/25/2022' , rlseDate:'01/25/2022' , stmtDate: '02/07/2022',
  //        entryPort:'4701' , description:'Fresh Salom' , vessel:'AA' ,  user:'plim' , arAmt: '191.99', apAmt: '41.88'},
  //     {refNo: '2270512' , entryNo: 'EH2-22705128', entryType:'01' , importer:'ADMCRA' , mot:'11' , custRefNo:'NB1175150B' , entryDate:'01/28/2022' , rlseDate:'01/28/2022' , stmtDate: '02/10/2022' ,
  //        entryPort: '3501' , description: 'Commercial Freezer', vessel: 'Zim Rotterdam' ,  user:'plim' , arAmt:'55' , apAmt:'0' },


  // ]


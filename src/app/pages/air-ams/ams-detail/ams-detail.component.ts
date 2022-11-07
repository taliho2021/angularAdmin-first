import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
  tap,
  filter,
  map,
  async,
} from 'rxjs';
import 'rxjs/operator/filter';
import { Customer } from 'src/app/models/cust';
import custData from '../../../../assets/data/cust.json';

@Component({
  selector: 'app-ams-detail',
  templateUrl: './ams-detail.component.html',
  styleUrls: ['./ams-detail.component.scss'],
})
export class AmsDetailComponent implements OnInit {
  selected!: string;
  cust$!: Observable<Customer[]>;
  private searchTerms = new Subject<string>();
  custControl = new FormControl('');

  amsForm = this.fb.group({
    bl: this.fb.group({
      issuer: [''],
      blType: [''],
      bookingNo: [''],
      carrierMasterBl: [''],
      hBl: [''],
      mib: [''],
    }),

    vessel: this.fb.group({
      vType: [''],
      carrierCode: [''],
      flag: [''],
      vName: [''],
      voyage: [''],
      vessCode: [''],
    }),

    ports: this.fb.group({
      por: [''],
      pol: [''],
      etd: [''],
      firstForPort: [''],
      lastForPort: [''],
      pou: [''],
      eta: [''],
      finalDest: [''],
    }),

    weights: this.fb.group({
      quantity: [''],
      uom: [''],
      grossWt: [''],
      unitWt: [''],
      volume: [''],
      unitVol: [''],
    }),

    container: this.fb.array([
      {
        contNo: [''],
        contType: [''],
        sealNo: [''],
        loadStatus: [''],
        service: [''],
      },
    ]),

    relatedParties: this.fb.group({
      shipper: this.fb.group({
        shipperCode: [''],
        name: [''],
        address: [''],
        telNo: [''],
      }),
      consignee: this.fb.group({
        consigneeCode: [''],
        name: [''],
        address: [''],
        telNo: [''],
      }),
      notify: this.fb.group({
        notifyCode: [''],
        name: [''],
        address: [''],
        telNo: [''],
      }),
      secondNotify: this.fb.group({
        secondNotifyCode: [''],
        name: [''],
        address: [''],
        telNo: [''],
      }),
    }),

    amend: this.fb.group({
      amendFlag: [''],
      reason: [''],
    }),
  });

  amendReason!: string;
  amends: string[] = [
    'New entry',
    'Add a bill of lading',
    'Delete a bill of lading',
    'Replace manifest quantiy',
  ];

  reasons: string[] = [
    '01 - Not laden aboard per evidence from foreign shipper, or amnended bill of lading',
    '03 - Error in manifesting, not laden on this carrier; laden on subsequent carrier for transportation to United States, per evidence in files',
    '04 - Clerical error in manifesting per bill of lading in files',
    '05 - Pilfered or prematurely landed prior to arrival in United States per signed statement of master or his agent or vessel log extract in our file',
  ];

  payload = ''; // To alert form value when onSubmit() is called

  searchTxt: any;
  selectedValue: any;

  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // this.cust$? =  this.custControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value: any) => this._filter(value || ''))
    // );
    this.cust$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchCust(term))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cust$.filter((cust$: string) =>
      cust$.toLowerCase().includes(filterValue)
    );
  }

  onSubmit() {
    this.payload = JSON.stringify(this.amsForm.getRawValue());
  }

  clearForm(): void {
    this.amsForm.reset();
  }

  searchCust(term: string): Observable<Customer[]> {
    const custUrl = 'src/assets/data/cust.json';
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Customer[]>(`${custUrl}/?custName=${term}`).pipe(
      tap((x) =>
        x.length
          ? console.log(`found customer "${term}"`)
          : console.log(`no customer matching "${term}"`)
      ),
      catchError(this.handleError<Customer[]>('serachCust', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { MatOptionModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexModule } from '@angular/flex-layout/flex';

interface ShipType {
  value: string;
}

interface Action {
  value: string;
}

interface isfType {
  value: string;
}

interface mot {
  value: string;
}
@Component({
    selector: 'app-shipment',
    templateUrl: './shipment.component.html',
    styleUrls: ['./shipment.component.scss'],
    standalone: true,
    imports: [FlexModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, FormsModule, NgFor, MatOptionModule]
})
export class ShipmentComponent implements OnInit {

  selectedValue!: string;
  selectedValue1!: string;
  selectedValue2!: string;
  selectedValue3!: string;

  isfShipment = this.fb.group({
    ISFNo:[''],
    ISFType:[''],
    MOT:[''],
    ShptType:[''],
    Action: [''],
    AmsBL:[''],
    AddlAmsBL:this.fb.array([
      this.fb.control('')
    ]),
    MasterBL:[''],
    FileNo:[''],
    CustRefNo: [''],
    ImporterID:['']
  })

  shipTypes: ShipType[] = [
    { value: '01=Standard or Regular Filings' },
    { value: '02=To Order Shipment' },
    { value: '03=Household Goods / Personal Effects' },
    { value: '04=Military, Government' },
    { value: '05=Diplomatic Shipment' },
    { value: '06=Carnet' },
    { value: '07=US Goods Returned' },
    { value: '08=FTZ Shipment' },
    { value: '09=International Mail Shipments' },
    { value: '10=Outer Continental Shipments' },
    { value: '11=Informal' }
  ];

  actions: Action[] = [
    { value: 'CT=Complete Transaction' },
    { value: 'FR=Flexible Range' },
    { value: 'FT=Flexible Timing' }
  ];

  isfTypes: isfType[] = [
    {value: 'ISF-10'},
    {value: 'ISF-5'},
    {value: 'ISF-5 to ISF-10'},
    {value: 'ISF-10 to ISF-5'}
  ]

  mots: mot[] = [
    {value: '11-Containerized'},
    {value: '10-Breakbulk'}
  ]


  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  get AddlAmsBl(): UntypedFormArray {
    return this.isfShipment.get('AddlAmsBL') as UntypedFormArray
  }

  addBill() {
    this.AddlAmsBl.push(this.fb.control(''))
  }
}

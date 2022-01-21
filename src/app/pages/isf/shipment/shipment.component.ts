import { Component, OnInit } from '@angular/core';

import { FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { FormBuilder } from '@angular/forms';

interface ShipType {
  value: string;
}

interface Action {
  value: string;
}
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  selectedValue!: string;
  selectedValue1!: string;

  isfShipment = this.fb.group({
    ISFNo:[''],
    ISFType:[''],
    MOT:[''],
    ShptType:[''],
    Action: [''],
    AmsBL:[''],
    Add1AmsBL:[''],
    Add2AmsBL:[''],
    Add3AmsBL:[''],
    Add4AmsBL:[''],
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


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

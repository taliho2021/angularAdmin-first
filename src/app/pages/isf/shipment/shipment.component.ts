import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

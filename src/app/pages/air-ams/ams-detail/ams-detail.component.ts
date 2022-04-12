import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ams-detail',
  templateUrl: './ams-detail.component.html',
  styleUrls: ['./ams-detail.component.scss']
})
export class AmsDetailComponent implements OnInit {
  amsForm = this.fb.group({
    bl: this.fb.group({
      issuer: [''],
      blType: [''],
      bookingNo: [''],
      carrierMasterBl:[''],
      hBl: [''],
      mib: ['']
    }),

<<<<<<< HEAD
=======
  amsForm = this.fb.group({
    bl: this.fb.group({
      issuer: [''],
      blType: [''],
      bookingNo: [''],
      carrierMasterBl:[''],
      hBl: [''],
      mib: ['']
    }),

>>>>>>> 525b09ad8aa8bdb721b359b4a182ab3791c60172
    vessel: this.fb.group({
      vType: [''],
      carrierCode: [''],
      flag: [''],
      vName: [''],
      voyage: [''],
      vessCode: ['']
    }),

    ports: this.fb.group({
      por: [''],
      pol: [''],
      etd:[''],
      firstForPort:[''],
      lastForPort:[''],
      pou: [''],
      eta: [''],
      finalDest:['']
    }),

    weights: this.fb.group({
      quantity: [''],
      uom: [''],
      grossWt: [''],
      unitWt: [''],
      volume: [''],
      unitVol: ['']
    }),

    container: this.fb.array([
     {
      contNo: [''],
      contType:[''],
      sealNo: [''],
      loadStatus:[''],
      service: ['']
     }
    ] ),

    relatedParties: this.fb.group({
      shipper: this.fb.group({
        shipperCode: [''],
        name:[''],
        address:[''],
        telNo:['']
      }),
      consignee: this.fb.group({
        consigneeCode: [''],
        name:[''],
        address:[''],
        telNo:['']
      }),
      notify: this.fb.group({
        notifyCode: [''],
        name:[''],
        address:[''],
        telNo:['']
      }),
      secondNotify: this.fb.group({
        secondNotifyCode: [''],
        name:[''],
        address:[''],
        telNo:['']
      }),
    }),

    amend: this.fb.group ({
      amendFlag: [''],
      reason: ['']
    })

  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    window.alert('Thank you for submitting Sea AMS data')
  }
}

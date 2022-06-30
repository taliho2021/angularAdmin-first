import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ams-detail',
  templateUrl: './ams-detail.component.html',
  styleUrls: ['./ams-detail.component.scss']
})
export class AmsDetailComponent implements OnInit {
  selected!: string

  amsForm = this.fb.group({
    bl: this.fb.group({
      issuer: [''],
      blType: [''],
      bookingNo: [''],
      carrierMasterBl:[''],
      hBl: [''],
      mib: ['']
    }),

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

  amendReason!: string
  amends: string[] = ['New entry', 'Add a bill of lading', 'Delte a bill of lading', 'Replace manifest quantiy']

  reasons: string[] = [
'01 - Not laden aboard per evidence from foreign shipper, or amnended bill of lading',
'03 - Error in manifesting, not laden on this carrier; laden on subsequent carrier for transportation to United States, per evidence in files',
'04 - Clerical error in manifesting per bill of lading in files',
'05 - Pilfered or prematurely landed prior to arrival in United States per signed statement of master or his agent or vessel log extract in our file'
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    window.alert('Thank you for submitting Sea AMS data')
  }

  clearForm(): void {
    this.amsForm.reset()
  }
}

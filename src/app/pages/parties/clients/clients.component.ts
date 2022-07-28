import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';

import { Importer } from 'src/app/models/importer';
import { ImportersService } from 'src/app/services/importers.service';
import  States from '../../../../assets/data/states.json'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})


export class ClientsComponent implements OnInit {
  cust: string = 'Pointe International'
  openAmt:number = 20000
  overDue:number = 1000
  crLimit: number = 50000

  importerForm = this.fb.group({
    clientId: null,
    name:  [null, Validators.required],
    address1: [null, Validators.required],
    address2: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    country: [null, Validators.required],
    phone1:  [null, Validators.required],
    email:  [null, Validators.required],
    website: [null, Validators.required],

    bond: this.fb.group({
      effectiveDate: [''],
      bondNo: [''],
      amount: [''],
      suretyCode: [''],
      portFiled: [''],
      holderName: ['']
    }),

    addInfo: this.fb.array([])

  });

  hasUnitNumber = false;
  importers: Importer[] =[];

  constructor(private fb: UntypedFormBuilder, private importerService : ImportersService) { }

  ngOnInit(): void {

  }

  get additional() {
    return this.importerForm.controls["addInfo"] as UntypedFormArray
  }

  addaddInfo() {
    const addtionalInfo = this.fb.group({
      tel2: ['', Validators.required],
      email2: [''],
      tel3: [''],
      email3:['']
    })
    this.additional.push(addtionalInfo)
  }

  states = States

  onSubmit(): void {
    this.importerService.getAll()
       .subscribe(data => (this.importers= data));
    console.log(this.importers);

    alert(this.importers[5].clientId);
  }

}

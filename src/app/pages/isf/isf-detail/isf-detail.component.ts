import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ISF } from '../../interfaces/isf';
import Isf from '../../../../assets/data/isf.json';
import { IsfService } from '../isf.service';
import { Location } from '@angular/common';
import { findIndex } from 'rxjs';

//will need later to process the Observable route parameters

@Component({
  selector: 'app-isf-detail',
  templateUrl: './isf-detail.component.html',
  styleUrls: ['./isf-detail.component.scss']
})

export class IsfDetailComponent implements OnInit {

  public isf!: ISF
  public id!: number
  public isfDetail : any
  constructor(
    private route: ActivatedRoute,
    private isfService: IsfService,
    private location: Location,
    private router: Router
  ) { }


  ngOnInit(): void {

    const refNo =  Number(this.route.snapshot.paramMap.get('id'))
    // window.alert(refNo)
    this.isfService.getIsf(refNo).subscribe(isf => this.isf = isf)
    // window.alert(this.isf)


    // this.route.params.forEach((params: Params) => {
    //   window.alert(params)
    //   this.refNo = params['refNo']                // this.refNo undefined
      // let ISF = this.isfService.getIsf(this.refNo)
      // let i = (Isf.indexOf(this.refNo))
      // window.alert(i)
      // if (Isf.length > 0) {
      //   this.isfDetail = Isf[10]
      // }
    // })
  }

  // getIsf(): void {
  //   this.isfService.getIsf(this.refNo)
  //     .subscribe(isf => this.isf = isf)
  //   window.alert(this.refNo)
    // this.route.params.forEach((params: Params) => {
    //     this.refNo = params['refNo']
    // })
    //     const isf = Isf.find(i => i.reffNo === this.refNo)
    // console.log(isf);
  // }

  goBack(): void {
    this.location.back()
  }

}

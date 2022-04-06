import { Observable, of } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { ISF } from '../interfaces/isf';
import { Injectable } from '@angular/core';
import Isfs from '../../../assets/data/isf.json'

@Injectable({
  providedIn: 'root'
})
export class IsfService {
  constructor(
  ) { }
  public refNo!: number

  getIsfs(): Observable<ISF[]> {
    const isfs = of(Isfs)
    return isfs
  }

  getIsf(refNo: number): Observable<ISF> {
    // this.route.params.forEach((params: Params) => {
    //   this.refNo = params['refNo']
    // })
    // window.alert(refNo)
    const isf = Isfs.find(i => i.refNo === refNo)!
    // window.alert('Isf Service reached',)
    // console.log(isf)
    // window.alert(Isfs[1])
    return of(isf)
  }
}

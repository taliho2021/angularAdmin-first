import { ActivatedRoute, Params } from '@angular/router';
import { Observable, findIndex, of } from 'rxjs';

import { ISF } from '../interfaces/isf';
import { Injectable } from '@angular/core';
import Isfs from '../../../assets/data/isf.json'

@Injectable({
  providedIn: 'root'
})
export class IsfService {

  constructor(
    private route: ActivatedRoute
  ) { }
  public refNo!: number

  getIsfs(): Observable<ISF[]> {
    const isfs = of(Isfs)
    return isfs
  }

  getIsf(refNo: string | null): Observable<ISF> {
    this.route.params.forEach((params: Params) => {
      this.refNo = params['refNo']
    })
    const isf = Isfs.find(i => i.refNo === refNo)!
    window.alert('Isf Service reached',)
    console.log(isf);

    return of(isf,)
  }
}

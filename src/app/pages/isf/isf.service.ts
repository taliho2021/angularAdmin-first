import { Observable, of } from 'rxjs';

import { ISF } from '../interfaces/isf';
import { Injectable } from '@angular/core';
import Isfs from '../../../assets/data/isf.json'

@Injectable({
  providedIn: 'root'
})
export class IsfService {

  constructor() { }

  getIsfs(): Observable<ISF[]> {
    const isfs = of(Isfs)
    return isfs
  }

  getIsf(seqNo: number): Observable<ISF> {
    const isf = Isfs.find(i => i.seqNo === seqNo)!
    return of(isf)
  }
}

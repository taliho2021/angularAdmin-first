import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs';

//will need later to process the Observable route parameters

@Component({
  selector: 'app-isf-detail',
  templateUrl: './isf-detail.component.html',
  styleUrls: ['./isf-detail.component.scss']
})
export class IsfDetailComponent implements OnInit {

  constructor(               //
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}

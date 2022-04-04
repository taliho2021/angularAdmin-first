import { TestBed } from '@angular/core/testing';

import { IsfService } from './isf.service';

describe('IsfService', () => {
  let service: IsfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

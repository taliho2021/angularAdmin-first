import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsqComponent } from './cmsq.component';

describe('CmsqComponent', () => {
  let component: CmsqComponent;
  let fixture: ComponentFixture<CmsqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

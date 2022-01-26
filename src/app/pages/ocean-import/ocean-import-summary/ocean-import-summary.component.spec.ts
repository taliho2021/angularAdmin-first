import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanImportSummaryComponent } from './ocean-import-summary.component';

describe('OceanImportSummaryComponent', () => {
  let component: OceanImportSummaryComponent;
  let fixture: ComponentFixture<OceanImportSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanImportSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanImportSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

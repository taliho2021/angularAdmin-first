import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanExportSummaryComponent } from './ocean-export-summary.component';

describe('OceanExportSummaryComponent', () => {
  let component: OceanExportSummaryComponent;
  let fixture: ComponentFixture<OceanExportSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanExportSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanExportSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

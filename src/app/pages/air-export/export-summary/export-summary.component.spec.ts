import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSummaryComponent } from './export-summary.component';

describe('ExportSummaryComponent', () => {
  let component: ExportSummaryComponent;
  let fixture: ComponentFixture<ExportSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

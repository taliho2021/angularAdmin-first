import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportDetailComponent } from './air-export-detail.component';

describe('AirExportDetailComponent', () => {
  let component: AirExportDetailComponent;
  let fixture: ComponentFixture<AirExportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AirExportDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirExportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

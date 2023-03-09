import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanExportDetailComponent } from './ocean-export-detail.component';

describe('OceanExportDetailComponent', () => {
  let component: OceanExportDetailComponent;
  let fixture: ComponentFixture<OceanExportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [OceanExportDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanExportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

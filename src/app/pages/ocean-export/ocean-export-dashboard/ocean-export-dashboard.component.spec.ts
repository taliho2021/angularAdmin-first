import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanExportDashboardComponent } from './ocean-export-dashboard.component';

describe('OceanExportDashboardComponent', () => {
  let component: OceanExportDashboardComponent;
  let fixture: ComponentFixture<OceanExportDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [OceanExportDashboardComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanExportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

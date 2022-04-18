import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanImportDashboardComponent } from './ocean-import-dashboard.component';

describe('OceanImportDashboardComponent', () => {
  let component: OceanImportDashboardComponent;
  let fixture: ComponentFixture<OceanImportDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanImportDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanImportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

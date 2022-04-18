import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportDashboardComponent } from './air-import-dashboard.component';

describe('AirImportDashboardComponent', () => {
  let component: AirImportDashboardComponent;
  let fixture: ComponentFixture<AirImportDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirImportDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirImportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

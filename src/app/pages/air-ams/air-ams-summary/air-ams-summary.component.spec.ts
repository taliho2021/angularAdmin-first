import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAmsSummaryComponent } from './air-ams-summary.component';

describe('AirAmsSummaryComponent', () => {
  let component: AirAmsSummaryComponent;
  let fixture: ComponentFixture<AirAmsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirAmsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirAmsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

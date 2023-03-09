import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAmsDashboardComponent } from './air-ams-dashboard.component';

describe('AirAmsDashboardComponent', () => {
  let component: AirAmsDashboardComponent;
  let fixture: ComponentFixture<AirAmsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AirAmsDashboardComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirAmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

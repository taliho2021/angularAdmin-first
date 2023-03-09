import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckAmsDashboardComponent } from './truck-ams-dashboard.component';

describe('TruckAmsDashboardComponent', () => {
  let component: TruckAmsDashboardComponent;
  let fixture: ComponentFixture<TruckAmsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TruckAmsDashboardComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckAmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaAmsDashboardComponent } from './sea-ams-dashboard.component';

describe('SeaAmsDashboardComponent', () => {
  let component: SeaAmsDashboardComponent;
  let fixture: ComponentFixture<SeaAmsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaAmsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaAmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

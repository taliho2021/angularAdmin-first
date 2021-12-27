import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsBrokerageComponent } from './customs-brokerage.component';

describe('CustomsBrokerageComponent', () => {
  let component: CustomsBrokerageComponent;
  let fixture: ComponentFixture<CustomsBrokerageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsBrokerageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomsBrokerageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

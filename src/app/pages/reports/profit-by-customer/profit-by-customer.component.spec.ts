import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitByCustomerComponent } from './profit-by-customer.component';

describe('ProfitByCustomerComponent', () => {
  let component: ProfitByCustomerComponent;
  let fixture: ComponentFixture<ProfitByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProfitByCustomerComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

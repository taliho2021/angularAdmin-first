import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitBySalesmanComponent } from './profit-by-salesman.component';

describe('ProfitBySalesmanComponent', () => {
  let component: ProfitBySalesmanComponent;
  let fixture: ComponentFixture<ProfitBySalesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProfitBySalesmanComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitBySalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

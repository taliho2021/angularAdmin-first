import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsSummaryComponent } from './ams-summary.component';

describe('AmsSummaryComponent', () => {
  let component: AmsSummaryComponent;
  let fixture: ComponentFixture<AmsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AmsSummaryComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

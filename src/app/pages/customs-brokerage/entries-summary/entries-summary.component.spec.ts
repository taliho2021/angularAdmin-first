import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesSummaryComponent } from './entries-summary.component';

describe('EntriesSummaryComponent', () => {
  let component: EntriesSummaryComponent;
  let fixture: ComponentFixture<EntriesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EntriesSummaryComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutMonochromeComponent } from './donut-monochrome.component';

describe('DonutMonochromeComponent', () => {
  let component: DonutMonochromeComponent;
  let fixture: ComponentFixture<DonutMonochromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DonutMonochromeComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutMonochromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

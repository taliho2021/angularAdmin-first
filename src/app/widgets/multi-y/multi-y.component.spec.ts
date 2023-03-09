import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiYComponent } from './multi-y.component';

describe('MultiYComponent', () => {
  let component: MultiYComponent;
  let fixture: ComponentFixture<MultiYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MultiYComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

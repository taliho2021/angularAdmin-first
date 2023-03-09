import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsDetailComponent } from './ams-detail.component';

describe('AmsDetailComponent', () => {
  let component: AmsDetailComponent;
  let fixture: ComponentFixture<AmsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AmsDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OiGridComponent } from './oi-grid.component';

describe('OiGridComponent', () => {
  let component: OiGridComponent;
  let fixture: ComponentFixture<OiGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OiGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

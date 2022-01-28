import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfGridComponent } from './isf-grid.component';

describe('IsfGridComponent', () => {
  let component: IsfGridComponent;
  let fixture: ComponentFixture<IsfGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

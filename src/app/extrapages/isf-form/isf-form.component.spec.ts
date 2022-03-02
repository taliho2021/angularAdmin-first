import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfFormComponent } from './isf-form.component';

describe('IsfFormComponent', () => {
  let component: IsfFormComponent;
  let fixture: ComponentFixture<IsfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

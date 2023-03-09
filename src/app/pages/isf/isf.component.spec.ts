import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfComponent } from './isf.component';

describe('IsfComponent', () => {
  let component: IsfComponent;
  let fixture: ComponentFixture<IsfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [IsfComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfDetailComponent } from './isf-detail.component';

describe('IsfDetailComponent', () => {
  let component: IsfDetailComponent;
  let fixture: ComponentFixture<IsfDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [IsfDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

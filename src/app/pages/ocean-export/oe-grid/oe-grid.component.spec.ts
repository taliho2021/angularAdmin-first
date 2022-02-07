import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeGridComponent } from './oe-grid.component';

describe('OeGridComponent', () => {
  let component: OeGridComponent;
  let fixture: ComponentFixture<OeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

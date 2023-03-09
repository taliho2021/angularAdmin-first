import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiGridComponent } from './ai-grid.component';

describe('AiGridComponent', () => {
  let component: AiGridComponent;
  let fixture: ComponentFixture<AiGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AiGridComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

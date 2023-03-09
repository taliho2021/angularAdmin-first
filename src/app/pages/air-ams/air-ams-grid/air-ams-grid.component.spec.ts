import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAmsGridComponent } from './air-ams-grid.component';

describe('AirAmsGridComponent', () => {
  let component: AirAmsGridComponent;
  let fixture: ComponentFixture<AirAmsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AirAmsGridComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirAmsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

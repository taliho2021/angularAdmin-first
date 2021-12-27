import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAmsComponent } from './air-ams.component';

describe('AirAmsComponent', () => {
  let component: AirAmsComponent;
  let fixture: ComponentFixture<AirAmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirAmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirAmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

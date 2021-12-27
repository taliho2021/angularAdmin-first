import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaAmsComponent } from './sea-ams.component';

describe('SeaAmsComponent', () => {
  let component: SeaAmsComponent;
  let fixture: ComponentFixture<SeaAmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaAmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaAmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

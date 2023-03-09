import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportDetailComponent } from './air-import-detail.component';

describe('AirImportDetailComponent', () => {
  let component: AirImportDetailComponent;
  let fixture: ComponentFixture<AirImportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AirImportDetailComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirImportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

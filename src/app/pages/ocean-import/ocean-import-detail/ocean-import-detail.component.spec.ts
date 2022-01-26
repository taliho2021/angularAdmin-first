import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanImportDetailComponent } from './ocean-import-detail.component';

describe('OceanImportDetailComponent', () => {
  let component: OceanImportDetailComponent;
  let fixture: ComponentFixture<OceanImportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanImportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanImportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

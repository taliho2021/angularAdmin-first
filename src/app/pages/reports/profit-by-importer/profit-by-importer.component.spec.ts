import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitByImporterComponent } from './profit-by-importer.component';

describe('ProfitByImporterComponent', () => {
  let component: ProfitByImporterComponent;
  let fixture: ComponentFixture<ProfitByImporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitByImporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitByImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

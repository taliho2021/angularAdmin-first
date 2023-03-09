import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login02Component } from './login02.component';

describe('Login02Component', () => {
  let component: Login02Component;
  let fixture: ComponentFixture<Login02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Login02Component]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

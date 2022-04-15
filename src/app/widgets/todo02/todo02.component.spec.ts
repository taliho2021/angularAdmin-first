import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo02Component } from './todo02.component';

describe('Todo02Component', () => {
  let component: Todo02Component;
  let fixture: ComponentFixture<Todo02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Todo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

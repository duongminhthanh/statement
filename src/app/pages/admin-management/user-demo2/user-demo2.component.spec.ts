import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemo2Component } from './user-demo2.component';

describe('UserDemo2Component', () => {
  let component: UserDemo2Component;
  let fixture: ComponentFixture<UserDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

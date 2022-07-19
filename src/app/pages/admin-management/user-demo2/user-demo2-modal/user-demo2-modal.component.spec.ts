import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemo2ModalComponent } from './user-demo2-modal.component';

describe('UserDemo2ModalComponent', () => {
  let component: UserDemo2ModalComponent;
  let fixture: ComponentFixture<UserDemo2ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDemo2ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemo2ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

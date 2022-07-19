/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MappingLogComponent } from './mapping-log.component';

describe('MappingLogComponent', () => {
  let component: MappingLogComponent;
  let fixture: ComponentFixture<MappingLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

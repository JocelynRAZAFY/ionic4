import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopComponentPage } from './pop-component.page';

describe('PopComponentPage', () => {
  let component: PopComponentPage;
  let fixture: ComponentFixture<PopComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

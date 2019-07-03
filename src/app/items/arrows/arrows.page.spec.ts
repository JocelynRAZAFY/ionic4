import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsPage } from './arrows.page';

describe('ArrowsPage', () => {
  let component: ArrowsPage;
  let fixture: ComponentFixture<ArrowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsItemsPage } from './icons-items.page';

describe('IconsItemsPage', () => {
  let component: IconsItemsPage;
  let fixture: ComponentFixture<IconsItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

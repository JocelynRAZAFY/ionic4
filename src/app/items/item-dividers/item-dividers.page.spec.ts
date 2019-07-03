import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDividersPage } from './item-dividers.page';

describe('ItemDividersPage', () => {
  let component: ItemDividersPage;
  let fixture: ComponentFixture<ItemDividersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDividersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDividersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

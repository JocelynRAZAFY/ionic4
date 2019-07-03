import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupPage } from './item-group.page';

describe('ItemGroupPage', () => {
  let component: ItemGroupPage;
  let fixture: ComponentFixture<ItemGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

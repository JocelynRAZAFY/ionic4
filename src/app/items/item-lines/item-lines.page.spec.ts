import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLinesPage } from './item-lines.page';

describe('ItemLinesPage', () => {
  let component: ItemLinesPage;
  let fixture: ComponentFixture<ItemLinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSlidingPage } from './item-sliding.page';

describe('ItemSlidingPage', () => {
  let component: ItemSlidingPage;
  let fixture: ComponentFixture<ItemSlidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSlidingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

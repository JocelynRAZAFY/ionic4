import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInputsPage } from './item-inputs.page';

describe('ItemInputsPage', () => {
  let component: ItemInputsPage;
  let fixture: ComponentFixture<ItemInputsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInputsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInputsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

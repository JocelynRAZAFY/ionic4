import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemsPage } from './media-items.page';

describe('MediaItemsPage', () => {
  let component: MediaItemsPage;
  let fixture: ComponentFixture<MediaItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileChooserPage } from './file-chooser.page';

describe('FileChooserPage', () => {
  let component: FileChooserPage;
  let fixture: ComponentFixture<FileChooserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileChooserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

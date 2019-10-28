import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaPage } from './mma.page';

describe('MmaPage', () => {
  let component: MmaPage;
  let fixture: ComponentFixture<MmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

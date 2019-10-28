import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiuJitsuPage } from './jiu-jitsu.page';

describe('JiuJitsuPage', () => {
  let component: JiuJitsuPage;
  let fixture: ComponentFixture<JiuJitsuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiuJitsuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiuJitsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

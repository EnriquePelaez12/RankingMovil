import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickBokingPage } from './kick-boking.page';

describe('KickBokingPage', () => {
  let component: KickBokingPage;
  let fixture: ComponentFixture<KickBokingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickBokingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickBokingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

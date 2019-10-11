import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeleadoresPage } from './list-peleadores.page';

describe('ListPeleadoresPage', () => {
  let component: ListPeleadoresPage;
  let fixture: ComponentFixture<ListPeleadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPeleadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPeleadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

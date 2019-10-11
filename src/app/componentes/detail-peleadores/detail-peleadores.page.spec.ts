import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPeleadoresPage } from './detail-peleadores.page';

describe('DetailPeleadoresPage', () => {
  let component: DetailPeleadoresPage;
  let fixture: ComponentFixture<DetailPeleadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPeleadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPeleadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

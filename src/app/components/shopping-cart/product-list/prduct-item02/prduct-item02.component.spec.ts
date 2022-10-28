import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductItem02Component } from './prduct-item02.component';

describe('PrductItem02Component', () => {
  let component: PrductItem02Component;
  let fixture: ComponentFixture<PrductItem02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductItem02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrductItem02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

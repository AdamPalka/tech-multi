import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fractorials2Component } from './fractorials2.component';

describe('Fractorials2Component', () => {
  let component: Fractorials2Component;
  let fixture: ComponentFixture<Fractorials2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fractorials2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fractorials2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

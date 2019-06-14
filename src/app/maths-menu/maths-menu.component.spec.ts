import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsMenuComponent } from './maths-menu.component';

describe('MathsMenuComponent', () => {
  let component: MathsMenuComponent;
  let fixture: ComponentFixture<MathsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

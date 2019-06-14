import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngComponentComponent } from './ang-component.component';

describe('AngComponentComponent', () => {
  let component: AngComponentComponent;
  let fixture: ComponentFixture<AngComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractorialsComponent } from './fractorials.component';

describe('FractorialsComponent', () => {
  let component: FractorialsComponent;
  let fixture: ComponentFixture<FractorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

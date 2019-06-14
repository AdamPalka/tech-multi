import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractorialGuideComponent } from './fractorial-guide.component';

describe('FractorialGuideComponent', () => {
  let component: FractorialGuideComponent;
  let fixture: ComponentFixture<FractorialGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractorialGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractorialGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

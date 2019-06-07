import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarHintComponent } from './grammar-hint.component';

describe('GrammarHintComponent', () => {
  let component: GrammarHintComponent;
  let fixture: ComponentFixture<GrammarHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

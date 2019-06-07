import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarChooserComponent } from './grammar-chooser.component';

describe('GrammarChooserComponent', () => {
  let component: GrammarChooserComponent;
  let fixture: ComponentFixture<GrammarChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

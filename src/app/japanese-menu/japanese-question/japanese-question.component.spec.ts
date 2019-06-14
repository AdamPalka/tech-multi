import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseQuestionComponent } from './japanese-question.component';

describe('JapaneseQuestionComponent', () => {
  let component: JapaneseQuestionComponent;
  let fixture: ComponentFixture<JapaneseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapaneseQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapaneseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

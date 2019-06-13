import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseGuideComponent } from './japanese-guide.component';

describe('JapaneseGuideComponent', () => {
  let component: JapaneseGuideComponent;
  let fixture: ComponentFixture<JapaneseGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapaneseGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapaneseGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

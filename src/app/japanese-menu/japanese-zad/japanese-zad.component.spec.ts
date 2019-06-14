import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseZadComponent } from './japanese-zad.component';

describe('JapaneseZadComponent', () => {
  let component: JapaneseZadComponent;
  let fixture: ComponentFixture<JapaneseZadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapaneseZadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapaneseZadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

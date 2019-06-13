import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseMenuComponent } from './japanese-menu.component';

describe('JapaneseMenuComponent', () => {
  let component: JapaneseMenuComponent;
  let fixture: ComponentFixture<JapaneseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapaneseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapaneseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

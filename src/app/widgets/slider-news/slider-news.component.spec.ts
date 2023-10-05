import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNewsComponent } from './slider-news.component';

describe('SliderNewsComponent', () => {
  let component: SliderNewsComponent;
  let fixture: ComponentFixture<SliderNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderNewsComponent]
    });
    fixture = TestBed.createComponent(SliderNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

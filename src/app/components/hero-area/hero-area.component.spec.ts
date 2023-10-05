import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAreaComponent } from './hero-area.component';

describe('HeroAreaComponent', () => {
  let component: HeroAreaComponent;
  let fixture: ComponentFixture<HeroAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroAreaComponent]
    });
    fixture = TestBed.createComponent(HeroAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

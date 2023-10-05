import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderClientsComponent } from './slider-clients.component';

describe('SliderClientsComponent', () => {
  let component: SliderClientsComponent;
  let fixture: ComponentFixture<SliderClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderClientsComponent]
    });
    fixture = TestBed.createComponent(SliderClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

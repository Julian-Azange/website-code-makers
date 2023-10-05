import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAreaComponent } from './team-area.component';

describe('TeamAreaComponent', () => {
  let component: TeamAreaComponent;
  let fixture: ComponentFixture<TeamAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamAreaComponent]
    });
    fixture = TestBed.createComponent(TeamAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

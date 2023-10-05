import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAreaComponent } from './clients-area.component';

describe('ClientsAreaComponent', () => {
  let component: ClientsAreaComponent;
  let fixture: ComponentFixture<ClientsAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsAreaComponent]
    });
    fixture = TestBed.createComponent(ClientsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

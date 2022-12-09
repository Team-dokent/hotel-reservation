import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rooms4Component } from './rooms4.component';

describe('Rooms4Component', () => {
  let component: Rooms4Component;
  let fixture: ComponentFixture<Rooms4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rooms4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rooms4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

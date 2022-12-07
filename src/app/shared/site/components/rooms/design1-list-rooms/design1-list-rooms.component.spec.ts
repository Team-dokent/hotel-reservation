import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design1ListRoomsComponent } from './design1-list-rooms.component';

describe('Design1ListRoomsComponent', () => {
  let component: Design1ListRoomsComponent;
  let fixture: ComponentFixture<Design1ListRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design1ListRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design1ListRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

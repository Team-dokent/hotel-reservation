import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design2ListRoomsComponent } from './design2-list-rooms.component';

describe('Design2ListRoomsComponent', () => {
  let component: Design2ListRoomsComponent;
  let fixture: ComponentFixture<Design2ListRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design2ListRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design2ListRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Design2BookingComponent } from './design2-booking.component';

describe('Design2BookingComponent', () => {
  let component: Design2BookingComponent;
  let fixture: ComponentFixture<Design2BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Design2BookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Design2BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

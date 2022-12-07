import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSharedComponent } from './booking-shared.component';

describe('BookingSharedComponent', () => {
  let component: BookingSharedComponent;
  let fixture: ComponentFixture<BookingSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

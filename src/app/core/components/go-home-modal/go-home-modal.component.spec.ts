import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHomeModalComponent } from './go-home-modal.component';

describe('GoHomeModalComponent', () => {
  let component: GoHomeModalComponent;
  let fixture: ComponentFixture<GoHomeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoHomeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoHomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

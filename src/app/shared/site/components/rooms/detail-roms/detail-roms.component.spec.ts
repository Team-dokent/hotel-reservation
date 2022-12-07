import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRomsComponent } from './detail-roms.component';

describe('DetailRomsComponent', () => {
  let component: DetailRomsComponent;
  let fixture: ComponentFixture<DetailRomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

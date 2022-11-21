import { TestBed } from '@angular/core/testing';

import { OpenedMenuService } from './opened-menu.service';

describe('OpenedMenuService', () => {
  let service: OpenedMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenedMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

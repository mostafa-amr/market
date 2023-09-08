import { TestBed } from '@angular/core/testing';

import { CartConfService } from './cart-conf.service';

describe('CartConfService', () => {
  let service: CartConfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartConfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

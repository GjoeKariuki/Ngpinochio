import { TestBed } from '@angular/core/testing';

import { EcommerceproductService } from './ecommerceproduct.service';

describe('EcommerceproductService', () => {
  let service: EcommerceproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

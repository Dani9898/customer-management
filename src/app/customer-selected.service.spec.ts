import { TestBed } from '@angular/core/testing';

import { CustomerSelectedService } from './customer-selected.service';

describe('CustomerSelectedService', () => {
  let service: CustomerSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FarmerSearchAbstractProvider } from './farmer-search-abstract-provider.service';

describe('FarmerSearchAbstractProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerSearchAbstractProvider = TestBed.get(FarmerSearchAbstractProvider);
    expect(service).toBeTruthy();
  });
});

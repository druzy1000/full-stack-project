import { TestBed } from '@angular/core/testing';

import { EmployeeRestStorageService } from './employee-rest-storage.service';

describe('EmployeeRestStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeRestStorageService = TestBed.get(EmployeeRestStorageService);
    expect(service).toBeTruthy();
  });
});

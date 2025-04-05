import { TestBed } from '@angular/core/testing';

import { TypedLoaderService } from './typed-loader.service';

describe('TypedLoaderService', () => {
  let service: TypedLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypedLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

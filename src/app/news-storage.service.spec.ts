import { TestBed } from '@angular/core/testing';

import { NewsStorageService } from './news-storage.service';

describe('NewsStorageService', () => {
  let service: NewsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

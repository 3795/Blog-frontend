import { TestBed, async, inject } from '@angular/core/testing';

import { AdaptGuard } from './adapt.guard';

describe('AdaptGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdaptGuard]
    });
  });

  it('should ...', inject([AdaptGuard], (guard: AdaptGuard) => {
    expect(guard).toBeTruthy();
  }));
});

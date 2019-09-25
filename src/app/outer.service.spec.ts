import { TestBed } from '@angular/core/testing';

import { OuterService } from './outer.service';
import { InnerService } from './inner.service';

function innerServiceMockFactory(): Partial<InnerService> {
  return {
  };
}

describe('OuterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: InnerService, useFactory: innerServiceMockFactory },
    ]
  }));

  it('should be created', () => {
    const service: OuterService = TestBed.get(OuterService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InnerService } from './inner.service';
import { BASE_API_URL } from './app.module';

describe('InnerService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: BASE_API_URL, useValue: 'https://fake-api' },
      ],
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: InnerService = TestBed.get(InnerService);
    expect(service).toBeTruthy();
  });
});

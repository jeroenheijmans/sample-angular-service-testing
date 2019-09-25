import { TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InnerService } from './inner.service';
import { BASE_API_URL } from './app.module';
import { first } from 'rxjs/operators';

describe('InnerService', () => {
  function getServiceUnderTest(): InnerService {
    return TestBed.get(InnerService);
  }

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

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service = getServiceUnderTest();
    expect(service).toBeTruthy();
  });

  describe('getSomeValue', () => {
    it('should return hardcoded value', () => {
      const service = getServiceUnderTest();
      const result = service.getSomeValue;
      expect(result).toBe('default getter value');
    });
  });

  describe('theSecret property', () => {
    it('should return the default value by default', () => {
      const service = getServiceUnderTest();
      const result = service.theSecret;
      expect(result).toBe('default private field value');
    });

    it('should allow setting a value properly adding extra text', () => {
      const service = getServiceUnderTest();
      service.theSecret = 'properly set value';
      expect(service.theSecret).toBe('properly set value (via setter)');
    });

    it('should not allow dirty updates of a secret field (but still does!)', () => {
      const service = getServiceUnderTest();
      (service as any)._mySecret = 'dirty secret';
      expect(service.theSecret).toBe('dirty secret');
    });
  });

  describe('getSynchronousObservable', async () => {
    it('should publish a default value', async () => {
      const service = getServiceUnderTest();
      const observable = service.getSynchronousObservable();
      observable.subscribe(result => {
        expect(result).toBe('sync observable value');
      });
    });
  });

  describe('getDelayedObservableFrom', () => {
    it('should publish a default value after some time', fakeAsync(() => {
      const service = getServiceUnderTest();
      const observable = service.getDelayedObservableFrom('thing');
      observable.subscribe(result => {
        expect(result).toBe('delayed thing');
      });
      tick(3000);
    }));
  });

  // TODO: Describe doActionOnServer
});

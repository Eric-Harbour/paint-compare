import { TestBed } from '@angular/core/testing';
import { ColorHttpClient } from './color-http-client';

describe('ColorHttpClient', () => {
  let service: ColorHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

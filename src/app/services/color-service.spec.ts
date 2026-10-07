import { TestBed } from '@angular/core/testing';
<<<<<<<< HEAD:src/app/services/color-card.spec.ts
import { ColorHttpClient } from './color-card.service';
========
import { ColorService } from './color-service';
>>>>>>>> ecafaad6e512bae10e7e47813e0338dfa6aba509:src/app/services/color-service.spec.ts

describe('ColorService', () => {
  let service: ColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { Txt2speechService } from './txt2speech.service';

describe('Txt2speechService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Txt2speechService]
    });
  });

  it('should be created', inject([Txt2speechService], (service: Txt2speechService) => {
    expect(service).toBeTruthy();
  }));
});

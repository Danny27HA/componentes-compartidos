import { TestBed } from '@angular/core/testing';

import { AnimalCardService } from './animal-card.service';

describe('AnimalCardService', () => {
  let service: AnimalCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

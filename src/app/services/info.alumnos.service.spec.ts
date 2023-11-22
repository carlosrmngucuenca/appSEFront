import { TestBed } from '@angular/core/testing';

import { InfoAlumnosService } from './info.alumnos.service';

describe('InfoAlumnosService', () => {
  let service: InfoAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

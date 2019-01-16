import { TestBed } from '@angular/core/testing';

import { TrelloMethodsService } from './trello-methods.service';

describe('TrelloMethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrelloMethodsService = TestBed.get(TrelloMethodsService);
    expect(service).toBeTruthy();
  });
});

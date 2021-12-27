import { TestBed } from '@angular/core/testing';

import { ListaAninaisResolver } from './lista-aninais.resolver';

describe('ListaAninaisResolver', () => {
  let resolver: ListaAninaisResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaAninaisResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

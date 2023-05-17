import { TestBed } from '@angular/core/testing';

import { LoginSerInterceptor } from './login-ser.interceptor';

describe('LoginSerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoginSerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoginSerInterceptor = TestBed.inject(LoginSerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

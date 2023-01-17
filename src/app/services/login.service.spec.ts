import { TestBed } from '@angular/core/testing';
import { AppRoutingModuleModule } from '../app-routing-module/app-routing-module.module';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModuleModule
      ],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

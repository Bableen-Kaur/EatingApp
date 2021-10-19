import { Injectable } from '@angular/core';
import { BaseService } from './base';

@Injectable()
export class AuthService {
  constructor(private srv: BaseService) {}

  public GetAll() {
    return this.srv.get("Appuser/all");
  }
  public Login(data) {
    return this.srv.post(data, 'AppUser/login');
  }
}

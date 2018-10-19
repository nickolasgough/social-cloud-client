import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userName: string;

  constructor() { }

  public isUserLoggedIn(): boolean {
    return false;
  }
}

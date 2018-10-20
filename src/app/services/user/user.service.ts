import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  public createUser(name: string): Observable<string> {
    const url = '/user/create';
    const body = {
      name: name
    };
    return this.httpService.post(url, body);
  }
}

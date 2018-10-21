import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private domain = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public post(url: string, body: any, options?: any): Observable<any> {
    const route = `${this.domain}${url}`;
    return this.httpClient.post(route, JSON.stringify(body), options);
  }
}

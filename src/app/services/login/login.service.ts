import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { UserService } from '../user/user.service';

declare const window: any;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private auth2: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private userService: UserService) {
    window.onload = () => {
      this.authInit();
    };
  }

  public authInit() {
    const appId = '531719510691-8pnk6mm00c7b8j4t61q4hsbs88ec46kl';
    gapi.load('auth2', () => {
      const auth2: any = gapi.auth2.init({
        client_id: `${appId}.apps.googleusercontent.com`,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.auth2.next(auth2);
    });
  }

  public attachButton(button: HTMLElement) {
    this.auth2.pipe(
      skipWhile(auth2 => auth2 === null)
    ).subscribe((auth2: any) => {
      gapi.signin2.render(button.id);
      auth2.attachClickHandler(button, {},
        (googleUser) => {
          const profile = googleUser.getBasicProfile();
          console.log('Token || ' + googleUser.getAuthResponse().id_token);
          console.log('ID: ' + profile.getId());
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());

          this.userService.createUser(profile.getName()).subscribe(
            result => console.log(result)
          );

          this.setCookie(profile.getName());
        });
      });
  }

  private setCookie(name: string): void {
    const eDate: Date = new Date();
    eDate.setDate(eDate.getDate() + 1);

    const cookie = `name=${name}; expires=${eDate.toUTCString()}`;
    document.cookie = cookie;
  }

  private getCookie(): string {
    const cookies: string[] = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith('name=')) {
        return cookie;
      }
    }

    return null;
  }

  public isUserLoggedIn(): boolean {
    return !!this.getCookie();
  }
}

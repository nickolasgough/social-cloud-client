import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { HttpService } from './http/http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    LoginService,
    UserService,
    HttpService
  ]
})
export class ServicesModule { }

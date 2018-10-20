import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { MatButton } from '@angular/material';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild(MatButton) private loginButton: MatButton;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const loginButton = document.getElementById('loginButton');
    this.loginService.attachButton(this.loginButton._elementRef.nativeElement);
  }
}

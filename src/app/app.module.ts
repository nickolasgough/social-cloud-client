import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { LoginComponent } from './components/login/login.component';
import { GuardsModule } from './guards/guards.module';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'feed', component: LoginComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterModule,

    ComponentsModule,
    ServicesModule,
    GuardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

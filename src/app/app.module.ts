import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { GuardsModule } from './guards/guards.module';
import { AuthGuard } from './guards/auth/auth.guard';
import { PagesModule } from './pages/pages.module';
import { LoginPageComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'feed', component: LoginPageComponent, canActivate: [AuthGuard]},
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
    GuardsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

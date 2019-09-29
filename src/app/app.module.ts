import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      // {
      //   path: 'logout',
      //   component: LogoutComponent
      // },
      // {
      //   path: 'admin',
      //   component: AdminComponent,
      //   canActivate: [AuthGuard]
      // },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

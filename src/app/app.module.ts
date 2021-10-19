
import { AuthService } from 'src/app/Service/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, DatePipe } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HttpHandler, HttpEventType, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { LoginComponent } from './Login/login.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthService, 
    HttpClientModule, 
    HttpClient,
    DatePipe,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoginComponent, multi: true }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
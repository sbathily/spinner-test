import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ViewerComponent } from './viewer/viewer.component';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ApiService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

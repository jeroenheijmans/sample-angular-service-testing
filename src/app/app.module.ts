import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

export const BASE_API_URL = new InjectionToken<string>('base api url');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    { provide: BASE_API_URL, useValue: 'https://example.org' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

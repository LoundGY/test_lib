import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicSimplifierApiModule } from '../../../../dist/dynamic-simplifier-services';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DynamicSimplifierApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

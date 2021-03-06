import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastFormComponent } from './forecast-form/forecast-form.component';
import { PolicyDescriptionsComponent } from './policy-descriptions/policy-descriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastFormComponent,
    PolicyDescriptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

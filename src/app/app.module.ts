import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCountriesCount } from './component/country/view-countries-count';
import { SearchPipe } from './pipes/search-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewCountriesCount,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

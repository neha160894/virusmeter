import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { ViewCountriesCount } from './component/country/view-countries-count';
import { SearchPipe } from './pipes/search-pipe';
import { TotalCountComponent } from './component/dashbord/total-count/total-count.component';
import { UserDashboardComponent } from './component/Dashboard/user-dashboard/user-dashboard.component';
import { CovidGraphComponent } from './component/Links/covid-graph/covid-graph.component';
import { HeaderComponent } from './component/Dashboard/header/header.component';
import { FooterComponent } from './component/Dashboard/footer/footer.component';
import { NewsFeedsComponent } from './component/Dashboard/Links/news-feeds/news-feeds.component';
import { IndiacasesComponent } from './component/Dashboard/CountryCases/indiacases/indiacases.component';
import { CovidCountryComponent } from './component/Links/covid-country/covid-country.component';
import { CovidDeathRateComponent } from './component/Links/covid-death-rate/covid-death-rate.component';
import { CovidSymptomsComponent } from './component/Links/covid-symptoms/covid-symptoms.component';
import { CovidIncubationComponent } from './component/Links/covid-incubation/covid-incubation.component';
import { CovidTransmissionComponent } from './component/Links/covid-transmission/covid-transmission.component';
import { CovidViewByCountryComponent } from './component/Links/covid-view-by-country/covid-view-by-country.component';

import { AddCommaPipe } from './pipe/add-comma.pipe';
import { CountryDetailComponent } from './component/country-detail/country-detail.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    ViewCountriesCount,
    SearchPipe,
    TotalCountComponent,
    UserDashboardComponent,
    CovidGraphComponent,
    HeaderComponent,
    FooterComponent,
    NewsFeedsComponent,
    IndiacasesComponent,
    AddCommaPipe,
    CountryDetailComponent,
    CovidCountryComponent,
    CovidDeathRateComponent,
    CovidSymptomsComponent,
    CovidIncubationComponent,
    CovidTransmissionComponent,
    CovidViewByCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-3680482764129527',
      adSlot: 7779355779
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

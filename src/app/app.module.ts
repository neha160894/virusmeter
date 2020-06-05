import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from 'angular-datatables';

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

import { AddCommaPipe } from './pipe/add-comma.pipe';
import { CountryDetailComponent } from './component/country-detail/country-detail.component';


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
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalCountComponent } from './component/dashbord/total-count/total-count.component';
import { UserDashboardComponent } from './component/Dashboard/user-dashboard/user-dashboard.component';
import { CovidGraphComponent } from './component/Links/covid-graph/covid-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalCountComponent,
    UserDashboardComponent,
    CovidGraphComponent
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

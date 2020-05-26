import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalCountComponent } from './component/dashbord/total-count/total-count.component';
import { UserDashboardComponent } from './component/Dashboard/user-dashboard/user-dashboard.component';
import { CovidGraphComponent } from './component/Links/covid-graph/covid-graph.component';
import { HeaderComponent } from './component/Dashboard/header/header.component';
import { FooterComponent } from './component/Dashboard/footer/footer.component';
import { AddCommaPipe } from './pipe/add-comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TotalCountComponent,
    UserDashboardComponent,
    CovidGraphComponent,
    HeaderComponent,
    FooterComponent,
    AddCommaPipe
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

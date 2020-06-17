import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './component/Dashboard/user-dashboard/user-dashboard.component';
import { TotalCountComponent } from './component/dashbord/total-count/total-count.component';
import { CovidGraphComponent } from './component/Links/covid-graph/covid-graph.component';
import { NewsFeedsComponent } from './component/Dashboard/Links/news-feeds/news-feeds.component';
import { IndiacasesComponent } from './component/Dashboard/CountryCases/indiacases/indiacases.component';
import { CountryDetailComponent } from './component/country-detail/country-detail.component';
import { CovidCountryComponent } from './component/Links/covid-country/covid-country.component';
import { CovidDeathRateComponent } from './component/Links/covid-death-rate/covid-death-rate.component';
import { CovidSymptomsComponent } from './component/Links/covid-symptoms/covid-symptoms.component';
import { CovidIncubationComponent } from './component/Links/covid-incubation/covid-incubation.component';
import { CovidTransmissionComponent } from './component/Links/covid-transmission/covid-transmission.component';
import { CovidViewByCountryComponent } from './component/Links/covid-view-by-country/covid-view-by-country.component';


const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      {
      path: '',
      component: TotalCountComponent},
      {
        path:'detail/:id',
        component: CountryDetailComponent
      }
      ]
  },
    {
      path: 'NewsFeeds',
      component: NewsFeedsComponent
    },
  {
    path: 'covidgraph',
    component: CovidGraphComponent
  },
  {
    path: 'covidcountry',
    component: CovidCountryComponent
  },
  {
    path:'covidDeathRate',
    component:CovidDeathRateComponent
  },
  {
    path:'covidSymptoms',
    component:CovidSymptomsComponent
  },
  {
    path:'covidIncubation',
    component:CovidIncubationComponent
  },
  {
    path:'covidTransmission',
    component:CovidTransmissionComponent
  },
  {
    path:'covidviewBycountry',
    component:CovidViewByCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

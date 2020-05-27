import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './component/Dashboard/user-dashboard/user-dashboard.component';
import { TotalCountComponent } from './component/dashbord/total-count/total-count.component';
import { CovidGraphComponent } from './component/Links/covid-graph/covid-graph.component';
import { NewsFeedsComponent } from './component/Dashboard/Links/news-feeds/news-feeds.component';
import { IndiacasesComponent } from './component/Dashboard/CountryCases/indiacases/indiacases.component';


const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [{
      path: '',
      component: TotalCountComponent,
    },
    {
      path: 'covidgraph',
      component: CovidGraphComponent
    },
    {
      path: 'NewsFeeds',
      component: NewsFeedsComponent
    }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

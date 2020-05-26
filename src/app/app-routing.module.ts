import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './component/Dashboard/user-dashboard/user-dashboard.component';
import { TotalCountComponent } from './component/dashbord/total-count/total-count.component';
import { CovidGraphComponent } from './component/Links/covid-graph/covid-graph.component';


const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [{
      path: '',
      component: TotalCountComponent
    },
    {
      path: 'covidgraph',
      component: CovidGraphComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/shared/components';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'team',
    loadChildren: () => import('@app/modules/team/team.module').then(m => m.TeamModule),
  },
  {
    path: 'project',
    loadChildren: () => import('@app/modules/project/project.module').then(m => m.ProjectModule),
  },
  {
    path: 'calendar',
    loadChildren: () => import('@app/modules/calendar/calendar.module').then(m => m.CalendarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

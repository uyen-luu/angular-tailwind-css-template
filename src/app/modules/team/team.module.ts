import { ThemeModule } from '@app/theme/theme.module';
import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import {
  TeamListComponent,
  TeamNavMenuComponent,
  TeamDetailComponent,
} from '@app/modules/team/components';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: TeamListComponent,
      },
      {
        path: 'detail',
        component: TeamDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    TeamComponent,
    TeamListComponent,
    TeamNavMenuComponent,
    TeamDetailComponent,
  ],
  imports: [ThemeModule, SharedModule.forRoot(), RouterModule.forChild(routes)]  
})
export class TeamModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './component/project/project.component';
import { AppLayoutComponent } from './layout/app-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

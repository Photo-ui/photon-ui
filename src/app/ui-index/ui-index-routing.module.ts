import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UiIndexComponent} from "./ui-index.component";
import {HomeComponent} from "./home/home.component";
import {GetStartedComponent} from "./get-started/get-started.component";

const routes: Routes = [
  {
    path: 'components',
    redirectTo: '/components/buttons',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UiIndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'get-started',
        component: GetStartedComponent
      },
      {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiIndexRoutingModule { }

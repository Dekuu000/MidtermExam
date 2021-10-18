import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path:'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/tab1/tab1.module').then( m => m.Tab1PageModule)
          }
        ]
      },
      {
        path:'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/first-with-tabs/first-with-tabs.module').then( m => m.FirstWithTabsPageModule)
          }
        ]
      },
      {
        path:'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/tab2/tab2.module').then( m => m.Tab2PageModule)
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

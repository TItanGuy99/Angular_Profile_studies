import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./components/features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'interviews',
    loadChildren: () => import('./components/features/interviews/interviews.module').then(m => m.InterviewsModule)
  },
  {
    path: 'fanpages',
    loadChildren: () => import('./components/features/fanPages/fanPages.module').then(m => m.FanPagesModule)
  },
  {
    path: 'development',
    loadChildren: () => import('./components/features/development/development.module').then(m => m.DevelopmentModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/features/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

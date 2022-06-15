import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FanPagesComponent } from './fanPages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FanPagesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FanPagesComponent],
  exports: [FanPagesComponent]
})
export class FanPagesModule { }

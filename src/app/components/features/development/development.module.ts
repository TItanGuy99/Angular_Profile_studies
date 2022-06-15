import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentComponent } from './development.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: DevelopmentComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevelopmentComponent],
  exports: [DevelopmentComponent]
})
export class DevelopmentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: InterviewsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    NgbNavModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InterviewsComponent],
  exports: [InterviewsComponent]
})
export class InterviewsModule { }

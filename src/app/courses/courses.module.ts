import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    CursosComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }

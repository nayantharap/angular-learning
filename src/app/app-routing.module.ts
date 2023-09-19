import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect to /home by default
  { path: 'home',loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule) },
  { path: 'school',loadChildren:()=>import('./school/school.module').then((x)=>x.SchoolModule) },
  { path: 'teachers',loadChildren:()=>import('./teachers/teachers.module').then((y)=>y.TeachersModule) },
  { path: 'students',loadChildren:()=>import('./student/student.module').then((a)=>a.StudentModule) },
  { path: 'students/create',loadChildren:()=>import('./student/create-student/create-student.module').then((a)=>a.CreateStudentModule) }
];
// const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

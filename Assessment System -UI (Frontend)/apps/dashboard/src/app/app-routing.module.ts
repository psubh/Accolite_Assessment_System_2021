import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'projects', canActivate: [AuthGuard], loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
    { path: 'questions', canActivate: [AuthGuard], loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
    { path: 'quiz', canActivate: [AuthGuard], loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) },
    { path: 'exam', canActivate: [AuthGuard], loadChildren: () => import('./exams/exams.module').then(m => m.ExamsModule) }

];


// const routes: Routes = [
//   { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
//   { path: 'projects',  loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
//   { path: 'questions',  loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
//   { path: 'quiz',  loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) },
//   { path: 'exam',  loadChildren: () => import('./exams/exams.module').then(m => m.ExamsModule) }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

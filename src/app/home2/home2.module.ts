import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2Component } from './home2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Home2Component,
  },
];

@NgModule({
  declarations: [Home2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Home2Module {}

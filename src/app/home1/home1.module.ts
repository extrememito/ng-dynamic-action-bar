import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Home1Component,
  },
];

@NgModule({
  declarations: [Home1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Home1Module {}

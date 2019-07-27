import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home1',
    pathMatch: 'full',
  },
  {
    path: 'home1',
    loadChildren: './home1/home1.module#Home1Module',
  },
  {
    path: 'home2',
    loadChildren: './home2/home2.module#Home2Module',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

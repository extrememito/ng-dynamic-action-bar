import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from './action-bar.component';

@NgModule({
  declarations: [ActionBarComponent],
  imports: [CommonModule],
  exports: [ActionBarComponent],
})
export class ActionBarModule {}

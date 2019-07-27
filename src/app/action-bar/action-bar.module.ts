import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from './action-bar.component';
import { PortalModule } from '@angular/cdk/portal';
import { ActionBarService } from './action-bar.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [ActionBarComponent],
  imports: [CommonModule, PortalModule],
  exports: [ActionBarComponent],
})
export class ActionBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ActionBarModule,
      providers: [ActionBarService],
    };
  }
}

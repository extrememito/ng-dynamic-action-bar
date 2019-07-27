import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { ActionBarService } from './action-bar.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent implements AfterViewInit {
  selectedPortal: Portal<any>;

  constructor(
    private service: ActionBarService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.service.portal.subscribe(portal => {
      this.selectedPortal = portal;
      this.cdRef.detectChanges();
    });
  }
}

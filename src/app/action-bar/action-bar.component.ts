import {
  Component,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { ActionBarService } from './action-bar.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent implements AfterViewInit, OnDestroy {
  private destroyed$ = new Subject();

  selectedPortal: Portal<any>;

  constructor(
    private service: ActionBarService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.service.portal.pipe(takeUntil(this.destroyed$)).subscribe(portal => {
      this.selectedPortal = portal;
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

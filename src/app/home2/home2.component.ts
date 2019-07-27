import {
  Component,
  OnInit,
  ViewContainerRef,
  AfterViewInit,
  ViewChild,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { ActionBarService } from '../action-bar/action-bar.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],
})
export class Home2Component implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('actionBar') actionBarContent: TemplateRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private service: ActionBarService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.service.actionBar = new TemplatePortal(
      this.actionBarContent,
      this.viewContainerRef
    );
  }

  ngOnDestroy() {
    this.service.actionBar = null;
  }
}

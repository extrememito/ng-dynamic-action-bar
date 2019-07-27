import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { ActionBarService } from '../action-bar/action-bar.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class Home1Component implements OnInit, AfterViewInit, OnDestroy {
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

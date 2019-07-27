import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';

@Injectable()
export class ActionBarService {
  private actionBarPortal$: BehaviorSubject<
    TemplatePortal<any>
  > = new BehaviorSubject(null);

  constructor() {}

  get portal() {
    return this.actionBarPortal$.asObservable();
  }

  set actionBar(templatePortal: TemplatePortal<any>) {
    this.actionBarPortal$.next(templatePortal);
  }
}

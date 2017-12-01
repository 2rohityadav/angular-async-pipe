import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'observable',
  template: `
    <div class="card card-block">
      <h4 class="card-title">observalbleData</h4>
      <div class="card-text">
        <p> {{ observalbleData }} </p>
      </div>
    </div>
  `
})
export class ObservableComponent implements OnDestroy {
  observalbleData: number;
  subscription: any = null;

  constructor() {
    this.subscribeObservable();
  }

  subscribeObservable() {
    this.subscription = this.getObservable().subscribe(v=> this.observalbleData = v);
  }

  getObservable() {
    return Observable
    .interval(1000)
    .take(5)
    .map((v) => v * v);
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
} 
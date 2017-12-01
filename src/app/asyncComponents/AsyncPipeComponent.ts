import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'async-pipe',
  template: `
    <div class="card card-block">
      <h4 class="card-title">Async Pipe Component</h4>
      <div class="card-text">
        <p> {{ observalble | async }} </p>
      </div>
    </div>
  `
})
export class AsyncPipeComponent {
  observalble: Observable<number>;

  constructor() {
    this.observalble = this.getObservable();
  }

  getObservable() {
    return Observable
    .interval(1000)
    .take(5)
    .map((v) => v * v);
  }
} 
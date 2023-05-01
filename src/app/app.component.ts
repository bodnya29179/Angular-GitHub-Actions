import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Counter:</h1>
    
    <div>
      <button class="btn decrement-btn" (click)="decrement()">-</button>

      <span>{{ counter }}</span>

      <button class="btn increment-btn" (click)="increment()">+</button>
    </div>
  `,
})
export class AppComponent {
  counter = 0;
  linterError: {} = {};

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}

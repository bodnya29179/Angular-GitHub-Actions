import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button class="btn increment-btn" (click)="increment()">+1</button>

    <div>{{ counter }}</div>

    <button class="btn decrement-btn" (click)="decrement()">-1</button>
  `,
})
export class AppComponent {
  counter = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}

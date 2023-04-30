import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Counter:</h1>
    
    <div>
      <button class="decrement-btn" (click)="decrement()">-1</button>

      <span>{{ counter }}</span>

      <button class="increment-btn" (click)="increment()">+1</button>
    </div>
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

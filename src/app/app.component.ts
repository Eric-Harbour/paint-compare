import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorCard } from './color-card/color-card.component'

// @Component({
//   imports: [ RouterOutlet ],
//   selector: 'app-root',
//   // styleUrl: './app.css',
//   // templateUrl: './app.html',
//   styleUrl: './color-card/color-card.css',
//   templateUrl: './color-card/color-card.html'
// })

@Component({
  imports: [RouterOutlet],
  selector: 'ColorCard',
  template: ''
})
export class App {
  protected readonly title = signal('paint-compare');
}

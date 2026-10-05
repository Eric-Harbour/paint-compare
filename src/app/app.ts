import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  // styleUrl: './app.css',
  // templateUrl: './app.html',
  styleUrl: './color-card/color-card.css',
  templateUrl: './color-card/color-card.html'
})
export class App {
  protected readonly title = signal('paint-compare');
}

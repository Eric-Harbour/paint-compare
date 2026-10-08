import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ColorCard } from './color-card/color-card.component'
import { ColorsPage } from './colors-page/colors-page.component'
import { Home } from './home/home.component'

// @Component({
//   imports: [RouterOutlet],
//   selector: 'app-root',
//   styleUrl: './app.css',
//   templateUrl: './app.html',
// })

@Component({
  imports: [RouterOutlet, ColorCard, ColorsPage, RouterLink, Home],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('paint-compare');
}

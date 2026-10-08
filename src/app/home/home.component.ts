import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly title = signal('paint-compare');
}

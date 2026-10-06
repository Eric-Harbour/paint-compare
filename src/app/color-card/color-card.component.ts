import { Component, inject } from '@angular/core';
//import { ColorHttpClient } from '../services/color-http-client'
import { RouterOutlet } from "@angular/router"
@Component({
  imports: [RouterOutlet],
  selector: 'app-color-card',
  styleUrl: './color-card.css',
  templateUrl: './color-card.html',
})
export class ColorCard {
  //colorHttpClient = inject(ColorHttpClient);
}

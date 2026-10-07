import { Component, inject } from '@angular/core';
import { ColorService } from '../services/color-card.service'
import { RouterOutlet } from "@angular/router"
@Component({
  imports: [RouterOutlet],
  selector: 'app-color-card',
  styleUrl: './color-card.css',
  templateUrl: './color-card.html',
})
export class ColorCard {
  Color 

}


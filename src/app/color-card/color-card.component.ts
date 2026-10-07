import { Component, inject } from '@angular/core';
<<<<<<< HEAD
import { ColorService } from '../services/color-card.service'
=======
//import { ColorHttpClient } from '../services/color-http-client'
>>>>>>> ecafaad6e512bae10e7e47813e0338dfa6aba509
import { RouterOutlet } from "@angular/router"
@Component({
  imports: [RouterOutlet],
  selector: 'app-color-card',
  styleUrl: './color-card.css',
  templateUrl: './color-card.html',
})
export class ColorCard {
<<<<<<< HEAD
  Color 

=======
  //colorHttpClient = inject(ColorHttpClient);
>>>>>>> ecafaad6e512bae10e7e47813e0338dfa6aba509
}


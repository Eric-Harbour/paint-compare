import { Component, inject } from '@angular/core';
import { ColorService } from '../services/color-card.service'
import { RouterOutlet } from "@angular/router"
import { ColorQA } from "../models/colorQA.model"
@Component({
  imports: [RouterOutlet],
  selector: 'app-color-card',
  styleUrl: './color-card.css',
  templateUrl: './color-card.html',
})
export class ColorCard {
  //colorHttpClient = inject(ColorHttpClient);
  colorService = inject(ColorService);


  ngOnInit() {
    this.colorService.getAllColors();
  }

  /**
   * 
   * @param selectedColor 
   * selectedColor contains:
   * colorName, colorNum, location, colorSection
   * 
   * 
   */
  createColorCard(selectedColor: ColorQA) {

  }
}




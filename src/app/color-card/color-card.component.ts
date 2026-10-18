import { Component, inject, ViewChild } from '@angular/core';
import { ColorService } from '../services/color-card.service'
import { RouterOutlet } from "@angular/router"
import { Color } from "../models/color.model"
import { ColorCardDirectiveTs } from './color-card.directive';
import { randomInt } from 'node:crypto';
@Component({
  imports: [RouterOutlet, ColorCardDirectiveTs],
  selector: 'app-color-card',
  styleUrl: './color-card.css',
  templateUrl: './color-card.html',
})
export class ColorCard {
  //colorHttpClient = inject(ColorHttpClient);
  colorService = inject(ColorService);

  selectedColor: Color = {
    // example:
    companyName: 'Sherwin-Williams',
    colorNumber: '6789',
    colorName: 'BLUE MOSQUE',
    lrvNumber: 17,
    lrvDescription: 'DARK',
    locationNumber: '167-C6',
    tintedPrimer: 'P-6',
    limitations: '',
    interiorBase: '',
    exteriorBase: '',
    colorSection: 'BLUE',
    isBase: false,
    hexCode: '#01810E'
  };


  ngOnInit(selectedColor: Color) {
    return selectedColor
  }

  /**
   * 
   * @param selectedColor 
   * selectedColor contains:
   * colorName, colorNum, location, colorSection
   * 
   * 
   */
  updateColorCard(selectedColor: Color) {
      this.selectedColor = selectedColor;
  }

  randomColor() {
    var randomID = randomInt(54) + 1;

    /** Call for the backend and return a color card */
    this.colorService.
  }
}




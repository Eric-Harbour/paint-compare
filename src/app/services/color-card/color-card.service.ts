import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ColorCard } from '../../pages/color-card/color-card.component'
import { Color } from '../../models/color.model'

@Service()
export class ColorService {
    private readonly colorHttp = inject(HttpClient);

    /**
     * Need to include error handling and ensuring correct codes are sent
     */
    getAllColors() {
        this.colorHttp.get('/api/colors', { observe: 'response' }).subscribe((fullResponse) => {
            console.log(fullResponse.status);
            console.log(fullResponse.body);
        })
    }

    /**
     * URL: paint-compare.com/<brand>/colors/<color-section>
     * loadSelectedColor(brandName: String, colorSection: String )
     * 

     * 
     * 
     */

    /**
     * 
     * @param brandName 
     * @param colorSection 
     * 
     * brandName: pulled from the URL, used to ensure we aren't pulling from the wrong company if they want a specific color
     * (ie. Sherwin-Williams and HGTV both have an 'Evergreen Fog')
     * 
     * colorSection: also pulled from the URL, used to grab all the colors in that section
     * (ie. Red, Blue, etc...)
     */
    loadSelectedColors(brandName: String, colorSection: String) {



    }

}


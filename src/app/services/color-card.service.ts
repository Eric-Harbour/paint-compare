import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ColorCard } from '../color-card/color-card.component'
import { Color } from '../models/color.model'

@Service()
export class ColorService {
    private readonly colorHttp = inject(HttpClient);

    /**
     * Need to include error handling and ensuring correct codes are sent
     */
    getAllColors() {
        this.colorHttp.get('/api/colors', { observe: 'response'}).subscribe((fullResponse) => {
            console.log(fullResponse.status);
            console.log(fullResponse.body);
        }) 
    }

}


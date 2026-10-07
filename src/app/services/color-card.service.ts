import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ColorCard } from '../color-card/color-card.component'
import { Color } from '../models/color.model'

@Service()
export class ColorService {
    private readonly colorHttp = inject(HttpClient);

    getAllColors() {
        this.colorHttp.get('')
    }

}

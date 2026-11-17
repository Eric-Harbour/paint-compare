import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Service()
export class BrandService {


    private readonly brandsHttp = inject(HttpClient);

    listBrands() {
        this.brandsHttp.get('/api/brands')
    }

}

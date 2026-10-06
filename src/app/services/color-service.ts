import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Service()
export class ColorService {
    http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
    }

    getColor(colorFamily: string) {
        this.http.get()
    }
}

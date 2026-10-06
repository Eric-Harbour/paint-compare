import { Routes } from '@angular/router';
import { ColorCard } from './color-card/color-card.component'

const routeConfig: Routes = [
    {
        path: '',
        component: ColorCard,
        title: 'Color Card'
    }
];

export default routeConfig;
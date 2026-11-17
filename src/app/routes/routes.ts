import { Routes } from '@angular/router';
import { ColorCard } from '../pages/color-card/color-card.component'
import { ColorsPage } from '../pages/colors-page/colors-page.component'
import { SWReds } from '../pages/colors-page/reds/sw-reds/sw-reds.component'
import { App } from '../app.component'
import { BrandsPage } from '../pages/brands-page/brands-page.component'
import { Home } from '../pages/home/home.component'

const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page'

    },
    {
        path: 'selectedcolor',
        component: ColorCard,
        title: 'Color Card'
    },
    {
        path: 'colors',
        component: ColorsPage,
        //component: SWReds,
        title: 'Color Collection'
    },
    {
        path: 'brands',
        component: BrandsPage,
        title: 'Brands'
    }
];

export default routeConfig;
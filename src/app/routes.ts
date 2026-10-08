import { Routes } from '@angular/router';
import { ColorCard } from './color-card/color-card.component'
import { ColorsPage } from './colors-page/colors-page.component'
import { App } from './app.component'
import { Home } from './home/home.component'

const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page'

    },
    {
        path: 'selectedColor',
        component: ColorCard,
        title: 'Color Card'
    },
    {
        path: 'colors',
        component: ColorsPage,
        title: 'Color Collection'
    }
];

export default routeConfig;
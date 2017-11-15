import {CvComponent} from './cv/cv.component';

export const ROUTES = [
    {
        path: '',
        component: CvComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];

import {PostsComponent} from './posts/posts.component';
import {CvComponent} from './cv/cv.component';

export const ROUTES = [
    {
        path: '',
        redirectTo: 'cv/',
        pathMatch: 'full'
    },
    {
        path: 'posts/',
        component: PostsComponent
    },
    {
        path: 'cv/',
        component: CvComponent
    }
];

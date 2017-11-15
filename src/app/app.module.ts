import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {CvService} from './cv/cv.service';

import {AppComponent} from './app.component';
import {ROUTES} from './app.routes';
import {CvComponent} from './cv/cv.component';
import { LoopPipe } from './tools/loop.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CvComponent,
        LoopPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        CvService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

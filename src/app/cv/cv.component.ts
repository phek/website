import {Component, AfterViewInit} from '@angular/core';
import {EXPERIENCES} from './experiences';

declare let particlesJS: any;
declare let $: any;

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css']
})
export class CvComponent implements AfterViewInit {

    xpMsg: Array<string> = [
        "Low experience",
        "Basic experience",
        "Average experience",
        "Good experience",
        "High experience"
    ];

    experiences: any = EXPERIENCES;

    ngAfterViewInit() {
        $('#fullpage').fullpage({
            anchors: ['start', 'experiences'],
            menu: '#menu'
        });
        particlesJS.load('particles-js', 'assets/scripts/particlesJS/particlesjs-config.json');
    }

}

import {Component, AfterViewInit} from '@angular/core';
import {EXPERIENCES, EDUCATION, ADDITIONAL} from './data';

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
    educations: any = EDUCATION;
    additional: any = ADDITIONAL;

    ngAfterViewInit() {
        $('#fullpage').fullpage({
            menu: '#menu',
            anchors: ['start', 'experiences', 'education', 'additional-skills']
        });
        particlesJS.load('particles-js', 'assets/scripts/particlesJS/particlesjs-config.json');
    }

}

import {Component, AfterViewInit} from '@angular/core';
import {EXPERIENCES, EDUCATION} from './data';

declare let pJSDom: any;
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

    pJS_desktop() {
        particlesJS.load('particles-js', 'assets/scripts/particlesJS/particlesjs-config.json');
    }

    pJS_mobile() {
        particlesJS.load('particles-js', 'assets/scripts/particlesJS/particlesjs-mobile-config.json');
    };

    pJS_getParticles() {
        return pJSDom[0].pJS.particles.number.value;
    }

    pJS_destroy() {
        pJSDom[0].pJS.fn.vendors.destroypJS();
        pJSDom = [];
    }

    ngAfterViewInit() {
        let self = this;

        $('#fullpage').fullpage({
            scrollOverflow: true,
            scrollOverflowOptions: {
                fadeScrollbars: true
            },
            menu: '#menu',
            anchors: ['start', 'about-me', 'experiences', 'education'],
            slidesNavigation: true,
            afterSlideLoad: function(){
                $(".fp-slidesNav").fadeIn(300, function() {
                    setTimeout(function () {
                        $(".fp-slidesNav").fadeOut();
                    }, 800);
                });
            },
            afterLoad: function() {
                $(".fp-slidesNav").fadeIn(300, function() {
                    setTimeout(function () {
                        $(".fp-slidesNav").fadeOut();
                    }, 800);
                });
            }
        });

        /* On start */
        if (window.innerWidth > 1100) {
            self.pJS_desktop();
        } else {
            self.pJS_mobile();
        }

        /* On resize */
        window.addEventListener('resize', function () {
            if (window.innerWidth > 750) {
                if (self.pJS_getParticles() != 80) {
                    self.pJS_destroy();
                    self.pJS_desktop();
                }
            } else {
                if (self.pJS_getParticles() == 80) {
                    self.pJS_destroy();
                    self.pJS_mobile();
                }
            }
        }, true);

    }

}

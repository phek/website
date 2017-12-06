import {Component, AfterViewInit} from '@angular/core';
import {EXPERIENCES, EDUCATION} from './data';

declare let pJSDom;
declare let particlesJS;
declare let $;
declare let ScrollMagic;
declare let TweenMax;

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

    static pJS_desktop() {
        particlesJS.load('particles-js', 'assets/scripts/particlesJS/particlesjs-config.json');
    }

    static pJS_mobile() {
        particlesJS.load('particles-js', 'assets/scripts/particlesJS/particlesjs-mobile-config.json');
    };

    static pJS_getParticles() {
        return pJSDom[0].pJS.particles.number.value;
    }

    static pJS_destroy() {
        pJSDom[0].pJS.fn.vendors.destroypJS();
        pJSDom = [];
    }

    ngAfterViewInit() {
        let windowHeight = $(window).height();
        let xpWidth = $(".xp-raiting:first").width();

        /* Full-page */
        $('#fullpage').fullpage({
            scrollOverflow: true,
            scrollOverflowOptions: {
                fadeScrollbars: true
            },
            menu: '#menu',
            anchors: ['start', 'about-me', 'experience', 'education'],
            slidesNavigation: true,
            afterSlideLoad: function () {
                $(".fp-slidesNav").fadeIn(300, function () {
                    setTimeout(function () {
                        $(".fp-slidesNav").fadeOut();
                    }, 800);
                });
            },
            afterLoad: function () {
                $(".fp-slidesNav").fadeIn(300, function () {
                    setTimeout(function () {
                        $(".fp-slidesNav").fadeOut();
                    }, 800);
                });
            }
        });

        /* Particles JS */
        /* On start */
        if (window.innerWidth > 1100) {
            CvComponent.pJS_desktop();
        } else {
            CvComponent.pJS_mobile();
        }

        /* On resize */
        window.addEventListener('resize', function () {
            if (window.innerWidth > 750) {
                if (CvComponent.pJS_getParticles() != 80) {
                    CvComponent.pJS_destroy();
                    CvComponent.pJS_desktop();
                }
            } else {
                if (CvComponent.pJS_getParticles() == 80) {
                    CvComponent.pJS_destroy();
                    CvComponent.pJS_mobile();
                }
            }
            windowHeight = $(window).height();
            xpWidth = $(".xp-raiting:first").width();
        }, true);

        /* Scroll Magic */
        let controller = new ScrollMagic.Controller({
            refreshInterval: 10
        });


        /* Start */
        new ScrollMagic.Scene({
            triggerElement: "#header",
            triggerHook: 0.5,
            duration: windowHeight
        })
            .on("enter", function () {
                TweenMax.to("#header-content", 0.5, {opacity: 1, y: 0}).play();
                console.log("Entered Start");
            })
            .on("leave", function () {
                TweenMax.to("#header-content", 0.5, {opacity: 0, y: 100}).play();
            })
            .addTo(controller);


        /* About */
        new ScrollMagic.Scene({
            triggerElement: "#about",
            triggerHook: 0.5,
            duration: windowHeight
        })
            .on("enter", function () {
                TweenMax.to("#about .container", 0.5, {opacity: 1, y: 0}).play();
            })
            .on("leave", function () {
                TweenMax.to("#about .container", 0.5, {opacity: 0, y: 100}).play();
            })
            .addTo(controller);


        /* Experience */
        new ScrollMagic.Scene({
            triggerElement: "#exp",
            triggerHook: 0.5,
            duration: windowHeight
        })
            .on("enter", function () {
                TweenMax.to("#exp .container", 0.5, {opacity: 1, y: 0}).play();
                TweenMax.to(".experience-wrapper:nth-child(4n) .xp-raiting div", 0.5, {x: 0}).play();
                TweenMax.to(".experience-wrapper:nth-child(4n + 1) .xp-raiting div", 1.2, {x: 0}).play();
                TweenMax.to(".experience-wrapper:nth-child(4n + 2) .xp-raiting div", 1.5, {x: 0}).play();
                TweenMax.to(".experience-wrapper:nth-child(4n + 3) .xp-raiting div", 1.8, {x: 0}).play();
            })
            .on("leave", function () {
                TweenMax.to("#exp .container", 0.5, {opacity: 0, y: 100}).play();
                TweenMax.to(".experience-wrapper:nth-child(4n) .xp-raiting div", 0.5, {x: -xpWidth}).play();
                TweenMax.to(".experience-wrapper:nth-child(4n + 1) .xp-raiting div", 1.2, {x: -xpWidth}).play();
                TweenMax.to(".experience-wrapper:nth-child(4n + 2) .xp-raiting div", 1.5, {x: -xpWidth}).play();
                TweenMax.to(".experience-wrapper:nth-child(4n + 3) .xp-raiting div", 1.8, {x: -xpWidth}).play();
            })
            .addTo(controller);

        /* Exp -> Edu */
        new ScrollMagic.Scene({triggerElement: "#edu"})
            .setTween("#edu .container", 0.5, {opacity: 1, y: 0})
            .addTo(controller);
    }

}

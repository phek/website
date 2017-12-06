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

    openMenu() {
        let ele = $("#menu");
        if (ele.hasClass("isOpen")) {
            ele.removeClass("isOpen");
        } else {
            ele.addClass("isOpen");
        }
    }

    static closeMenu() {
        $("#menu").removeClass("isOpen");
    }

    ngAfterViewInit() {
        let windowHeight = $(window).height();
        let xpWidth = $(".xp-raiting:first").width();

        /* On Scroll */
        window.onscroll = function() {
            CvComponent.closeMenu();
            console.log("scrolling");
        };

        /* Full-page */
        $('#fullpage').fullpage({
            scrollOverflow: true,
            scrollOverflowOptions: {
                fadeScrollbars: true
            },
            menu: '#menu',
            anchors: ['start', 'about-me', 'experience', 'education'],
            slidesNavigation: true,
            animateAnchor: false,
            onLeave: function() {
                CvComponent.closeMenu();
            },
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
                if (CvComponent.pJS_getParticles() != 60) {
                    CvComponent.pJS_destroy();
                    CvComponent.pJS_desktop();
                }
            } else {
                if (CvComponent.pJS_getParticles() == 60) {
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


        function newTween(triggerEle, toChange, onEnter?, onLeave?) {
            new ScrollMagic.Scene({
                triggerElement: triggerEle,
                triggerHook: 0.5,
                duration: windowHeight
            })
                .on("enter", function () {
                    TweenMax.to(toChange, 0.5, {opacity: 1, y: 0}).play();
                    if (onEnter) {
                        onEnter();
                    }
                })
                .on("leave", function () {
                    TweenMax.to(toChange, 0.5, {opacity: 0, y: 100}).play();
                    if (onLeave) {
                        onLeave();
                    }
                })
                .addTo(controller);
        }

        /* Start */
        newTween("#header", "#header-content");
        newTween("#about", "#about .container");
        newTween("#exp", "#exp .container", function () {
            TweenMax.to(".experience-wrapper:nth-child(4n) .xp-raiting div", 0.5, {x: 0}).play();
            TweenMax.to(".experience-wrapper:nth-child(4n + 1) .xp-raiting div", 1.2, {x: 0}).play();
            TweenMax.to(".experience-wrapper:nth-child(4n + 2) .xp-raiting div", 1.5, {x: 0}).play();
            TweenMax.to(".experience-wrapper:nth-child(4n + 3) .xp-raiting div", 1.8, {x: 0}).play();
        }, function () {
            TweenMax.to(".experience-wrapper:nth-child(4n) .xp-raiting div", 0.5, {x: -xpWidth}).play();
            TweenMax.to(".experience-wrapper:nth-child(4n + 1) .xp-raiting div", 1.2, {x: -xpWidth}).play();
            TweenMax.to(".experience-wrapper:nth-child(4n + 2) .xp-raiting div", 1.5, {x: -xpWidth}).play();
            TweenMax.to(".experience-wrapper:nth-child(4n + 3) .xp-raiting div", 1.8, {x: -xpWidth}).play();
        });
        newTween("#edu", "#edu .container");
    }

}

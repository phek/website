webpackJsonp([1,4],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__experiences__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CvComponent = (function () {
    function CvComponent() {
        this.xpMsg = [
            "Low experience",
            "Basic experience",
            "Average experience",
            "Good experience",
            "High experience"
        ];
        this.experiences = __WEBPACK_IMPORTED_MODULE_1__experiences__["a" /* EXPERIENCES */];
    }
    CvComponent.prototype.ngAfterViewInit = function () {
        $('#fullpage').fullpage({
            anchors: ['start', 'experiences'],
            menu: '#menu'
        });
        particlesJS.load('particles-js', '/assets/scripts/particlesJS/particlesjs-config.json');
    };
    CvComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-cv',
            template: __webpack_require__(673),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], CvComponent);
    return CvComponent;
}());
//# sourceMappingURL=D:/Projects/CV/mean-app/src/cv.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__(674),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/CV/mean-app/src/posts.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    // Get all posts from the API
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('/api/get/posts')
            .map(function (res) { return res.json(); });
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=D:/Projects/CV/mean-app/src/posts.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projects/CV/mean-app/src/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(672),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projects/CV/mean-app/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__posts_posts_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cv_cv_service__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cv_cv_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tools_loop_pipe__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cv_cv_component__["a" /* CvComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tools_loop_pipe__["a" /* LoopPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* ROUTES */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__posts_posts_service__["a" /* PostsService */],
                __WEBPACK_IMPORTED_MODULE_6__cv_cv_service__["a" /* CvService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projects/CV/mean-app/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__posts_posts_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cv_cv_component__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });


var ROUTES = [
    {
        path: '',
        redirectTo: 'cv/',
        pathMatch: 'full'
    },
    {
        path: 'posts/',
        component: __WEBPACK_IMPORTED_MODULE_0__posts_posts_component__["a" /* PostsComponent */]
    },
    {
        path: 'cv/',
        component: __WEBPACK_IMPORTED_MODULE_1__cv_cv_component__["a" /* CvComponent */]
    }
];
//# sourceMappingURL=D:/Projects/CV/mean-app/src/app.routes.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CvService = (function () {
    function CvService(http) {
        this.http = http;
    }
    // Get all posts from the API
    CvService.prototype.getExperiences = function () {
        return this.http.get('/api/cv/get/experiences')
            .map(function (res) { return res.json(); });
    };
    CvService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], CvService);
    return CvService;
    var _a;
}());
//# sourceMappingURL=D:/Projects/CV/mean-app/src/cv.service.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXPERIENCES; });
var EXPERIENCES = [
    {
        "category": "Website languages",
        "items": [
            {
                "title": "HTML",
                "xp": 4
            },
            {
                "title": "CSS",
                "xp": 4
            },
            {
                "title": "Javascript",
                "xp": 3
            },
            {
                "title": "PHP",
                "xp": 3
            }
        ]
    },
    {
        "category": "Javascript tools",
        "items": [
            {
                "title": "Jquery",
                "xp": 4
            },
            {
                "title": "AngularJS",
                "xp": 3
            },
            {
                "title": "ReactJS",
                "xp": 1
            },
            {
                "title": "NodeJS",
                "xp": 2
            }
        ]
    },
    {
        "category": "Website tools",
        "items": [
            {
                "title": "Sass & Stylus",
                "xp": 3
            },
            {
                "title": "Youtube API",
                "xp": 2
            },
            {
                "title": "Soundcloud API",
                "xp": 2
            },
            {
                "title": "Jquery UI",
                "xp": 2
            },
            {
                "title": "Google Translate API",
                "xp": 2
            },
            {
                "title": "Bootstrap",
                "xp": 2
            }
        ]
    },
    {
        "category": "Programming languages",
        "items": [
            {
                "title": "Java",
                "xp": 4
            },
            {
                "title": "C/C++",
                "xp": 2
            },
            {
                "title": "Erlang",
                "xp": 1
            },
            {
                "title": "Lua",
                "xp": 2
            },
            {
                "title": "Assembly",
                "xp": 1
            },
            {
                "title": "Scala",
                "xp": 1
            }
        ]
    }
];
//# sourceMappingURL=D:/Projects/CV/mean-app/src/experiences.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoopPipe = (function () {
    function LoopPipe() {
    }
    LoopPipe.prototype.transform = function (value, args) {
        var res = [];
        for (var i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    };
    LoopPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'loopNumber'
        }), 
        __metadata('design:paramtypes', [])
    ], LoopPipe);
    return LoopPipe;
}());
//# sourceMappingURL=D:/Projects/CV/mean-app/src/loop.pipe.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projects/CV/mean-app/src/environment.js.map

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "#menu {\r\n    top: 0;\r\n    position: absolute;\r\n    width: calc(100% - 60px);\r\n    padding: 15px 30px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 600;\r\n    -webkit-animation: fadein 2s;\r\n            animation: fadein 2s;\r\n}\r\n\r\n#menu img {\r\n    height: 40px;\r\n}\r\n\r\n#menu div {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n#menu p {\r\n    border-bottom: 2px solid transparent;\r\n    border-top: 2px solid transparent;\r\n}\r\n\r\n#menu a:not(:first-child):not(:last-child) {\r\n    margin-right: 20px;\r\n}\r\n\r\n#menu a:first-child {\r\n    margin-right: 40px;\r\n}\r\n\r\n#menu a, #menu a:active, #menu a:visited {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n#menu p.active {\r\n    border-bottom: 2px solid #fff;\r\n}\r\n\r\n.menu-button {\r\n    border: 2px solid #fff;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.logo {\r\n    border-top: none !important;\r\n    border-bottom: none !important;\r\n    margin-top: 0px !important;\r\n    line-height: 0;\r\n}\r\n\r\n#menu .icon {\r\n    display: none;\r\n}\r\n\r\n#header {\r\n    background-color: #40b4b3;\r\n    background: linear-gradient(#40b4b3, #409fb4);\r\n    width: 100%;\r\n    position: relative;\r\n    color: #fff;\r\n}\r\n\r\n#header-content {\r\n    text-align: center;\r\n}\r\n\r\n#header-text {\r\n    margin-right: 15px;\r\n    margin-bottom: 15px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-animation: fadein-up 2s;\r\n            animation: fadein-up 2s;\r\n}\r\n\r\n#header-text p {\r\n    font-style: italic;\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n#lines {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    opacity: 0.1;\r\n}\r\n\r\n#portrait-wrapper {\r\n    width: 200px;\r\n    height: 200px;\r\n    background-color: rgb(64, 169, 179);\r\n    display: inline-block;\r\n    border-radius: 100%;\r\n    overflow: hidden;\r\n    z-index: 99;\r\n    position: relative;\r\n    border: 4px solid #fff;\r\n    vertical-align: middle;\r\n    box-shadow: 0px 0px 6px #000;\r\n    -webkit-animation: fadein 2s;\r\n            animation: fadein 2s;\r\n}\r\n\r\n#portrait-wrapper img {\r\n    height: 100%;\r\n}\r\n\r\n.experience-box {\r\n    color: #fff;\r\n    -webkit-animation: fadein-up 2s;\r\n            animation: fadein-up 2s;\r\n}\r\n\r\n.experience-box:nth-child(8n - 7) {\r\n    background-color: #56aabd;\r\n    background: linear-gradient(to bottom right, #56aabd, #4f73c5);\r\n}\r\n\r\n.experience-box:nth-child(8n - 6) {\r\n    background-color: #3eb3a2;\r\n    background: linear-gradient(to bottom right, #3eb3a2, #3e8db3);\r\n}\r\n\r\n.experience-box:nth-child(8n - 5) {\r\n    background-color: #d26899;\r\n    background: linear-gradient(to bottom right, #d26899, #ca6868);\r\n}\r\n\r\n.experience-box:nth-child(8n - 4) {\r\n    background-color: #ad68d2;\r\n    background: linear-gradient(to bottom right, #ae68d2, #8068ca);\r\n}\r\n\r\n.experience-box:nth-child(8n - 3) {\r\n    background-color: #8f99d8;\r\n}\r\n\r\n.experience-box:nth-child(8n - 2) {\r\n    background-color: #aa7cce;\r\n}\r\n\r\n.experience-box:nth-child(8n - 1) {\r\n    background-color: #da90c8;\r\n}\r\n\r\n.experience-box:nth-child(8n) {\r\n    background-color: #e681b1;\r\n}\r\n\r\n.experience-box:nth-child(4n), .experience-box:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.experience-box h2 {\r\n    margin-top: -100px;\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n}\r\n\r\n.experience-box h3 {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.experience-container {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.experience-wrapper {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.xp-category {\r\n    margin-left: 200px;\r\n}\r\n\r\n.xp-title {\r\n    display: inline-block;\r\n    text-align: right;\r\n    width: 190px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.xp-raiting {\r\n    display: inline-block;\r\n    width: calc(100% - 385px);\r\n    height: 13px;\r\n    vertical-align: middle;\r\n    background-color: rgba(255, 255, 255, 0.25);\r\n    overflow: hidden;\r\n    border-radius: 3px;\r\n}\r\n\r\n.xp-raiting div {\r\n    height: 100%;\r\n    width: 25%;\r\n    float: left;\r\n    -webkit-animation: xp-rise 5s;\r\n            animation: xp-rise 5s;\r\n}\r\n\r\n.xp-raiting div:last-child {\r\n    border-top-right-radius: 1000px;\r\n    border-bottom-right-radius: 1000px;\r\n}\r\n\r\n.xp-raiting div:nth-child(2), .xp-raiting div:nth-child(3), .xp-raiting div:nth-child(4) {\r\n    margin-left: -1px;\r\n    width: calc(25% + 1px);\r\n}\r\n\r\n.xp-raiting div:nth-child(1) {\r\n    background-color: #ff7d7d;\r\n    background: linear-gradient(to right, #ff7d7d, #ffc47d);\r\n}\r\n\r\n.xp-raiting div:nth-child(2) {\r\n    background-color: #ffc47d;\r\n    background: linear-gradient(to right, #ffc47d, #fff47d);\r\n}\r\n\r\n.xp-raiting div:nth-child(3) {\r\n    background-color: #fff47d;\r\n    background: linear-gradient(to right, #fff47d, #dfff7d);\r\n}\r\n\r\n.xp-raiting div:nth-child(4) {\r\n    background-color: #bef991;\r\n    background: linear-gradient(to right, #dfff7d, #bef991);\r\n    border-top-right-radius: 3px;\r\n    border-bottom-right-radius: 3px;\r\n}\r\n\r\n.xp-text {\r\n    display: inline-block;\r\n    font-size: 0.9em;\r\n    color: #fff;\r\n    margin-left: 2px;\r\n    vertical-align: top;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.box {\r\n    padding: 20px 0;\r\n    -webkit-animation: fadein 2s;\r\n            animation: fadein 2s;\r\n}\r\n\r\n#particles-js {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-animation: fadein 5s;\r\n            animation: fadein 5s;\r\n}\r\n\r\n@-webkit-keyframes xp-rise {\r\n    from {\r\n        -webkit-transform: translateX(-100%);\r\n                transform: translateX(-100%);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(0%);\r\n                transform: translateX(0%);\r\n    }\r\n}\r\n\r\n@keyframes xp-rise {\r\n    from {\r\n        -webkit-transform: translateX(-100%);\r\n                transform: translateX(-100%);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(0%);\r\n                transform: translateX(0%);\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 650px) {\r\n\r\n    #menu a {display: none;}\r\n    #menu a.icon {\r\n        float: right;\r\n        display: block;\r\n        font-size: 35px;\r\n        margin-top: 5px;\r\n    }\r\n\r\n    #menu {\r\n        width: calc(100% - 40px);\r\n        padding: 15px 20px;\r\n    }\r\n\r\n    #particles-js {\r\n        display: none;\r\n    }\r\n\r\n    p {\r\n        font-size: 0.9em;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 2.4em;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 1.8em;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.2em;\r\n    }\r\n\r\n    h4 {\r\n        font-size: 1em;\r\n    }\r\n\r\n    #header-text {\r\n        margin-right: 0;\r\n    }\r\n\r\n    #portrait-wrapper {\r\n        display: block;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .experience-box h2 {\r\n        margin-top: 0;\r\n        margin-bottom: 15px;\r\n        text-align: center;\r\n    }\r\n\r\n    .experience-container {\r\n        width: 60%;\r\n    }\r\n\r\n    .xp-category {\r\n        margin-left: 0;\r\n        text-align: center;\r\n        margin-bottom: 15px !important;\r\n    }\r\n\r\n    .xp-title {\r\n        display: block;\r\n        text-align: center;\r\n        width: 100%;\r\n        margin-right: 0;\r\n        margin-bottom: 2px;\r\n    }\r\n\r\n    .xp-raiting {\r\n        display: block;\r\n        width: 100%;\r\n        height: 6px;\r\n        border-radius: 10px;\r\n    }\r\n\r\n    .xp-text {\r\n        display: block;\r\n        text-align: right;\r\n    }\r\n\r\n    .fp-controlArrow.fp-prev {\r\n        border-width: 28px 24px 28px 0;\r\n    }\r\n\r\n    .fp-controlArrow.fp-next {\r\n        border-width: 28px 0 28px 24px;\r\n    }\r\n\r\n    .fp-controlArrow {\r\n        margin-top: -28px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div id=\"fullpage\">\n    <div id=\"header\" class=\"section\">\n        <div id=\"particles-js\"></div>\n        <nav id=\"menu\">\n            <a href=\"cv/#start\">\n                <div class=\"logo\" data-menuanchor=\"start\">\n                    <img src=\"/assets/images/logo.png\">\n                </div>\n            </a>\n            <a href=\"cv/#experiences\">\n                <div class=\"menu-button\">\n                    <p data-menuanchor=\"experiences\">\n                        Experiences\n                    </p>\n                </div>\n            </a>\n            <a href=\"javascript:void(0);\">\n                <div class=\"menu-button\">\n                    <p data-menuanchor=\"\">\n                        Additional Skills\n                    </p>\n                </div>\n            </a>\n            <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\n                <div>&#9776;</div>\n            </a>\n        </nav>\n        <div id=\"header-content\">\n            <div id=\"header-text\">\n                <h1>Philip Ekblom</h1>\n                <p>Engineer Student at KTH in Computer Science</p>\n                <a></a>\n            </div>\n            <div id=\"portrait-wrapper\">\n                <img src=\"/assets/images/portrait.jpg\">\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div *ngFor=\"let experience of experiences\" class=\"slide experience-box\">\n            <div class=\"experience-container\">\n                <h2>Experiences</h2>\n                <h3 class=\"xp-category\">{{experience.category}}</h3>\n                <div class=\"experience-wrapper\" *ngFor=\"let item of experience.items\">\n                    <div class=\"xp-title\">\n                        <h4>{{item.title}}</h4>\n                    </div>\n                    <div class=\"xp-raiting\" title=\"{{xpMsg[item.xp]}}\">\n                        <div *ngFor=\"let key of item.xp | loopNumber\"></div>\n                    </div>\n                    <div class=\"xp-text\">{{item.xp * 25}}%</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let post of posts\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ post.title }}</h4>\n      <p class=\"card-text\">{{post.body}}</p>\n      <a href=\"#\" class=\"card-link\">Card link</a>\n      <a href=\"#\" class=\"card-link\">Another link</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[707]);
//# sourceMappingURL=main.bundle.map
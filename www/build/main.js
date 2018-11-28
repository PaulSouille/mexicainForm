webpackJsonp([2],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DisplayEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisplayEventPage = /** @class */ (function () {
    function DisplayEventPage(navCtrl, navParams, apiProvider, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.iab = iab;
        this.events = new Array();
        this.ifData = false;
    }
    DisplayEventPage.prototype.isLink = function (message) {
        return (message.includes('https://'));
    };
    DisplayEventPage.prototype.goInternet = function (response) {
        this.iab.create(response);
    };
    DisplayEventPage.prototype.fillData = function () {
        var _this = this;
        this.apiProvider.getEvent().subscribe(function (data) {
            if (data['error'] == 'SUCCESS') {
                _this.events = data['data'];
                if (_this.events.length != 0) {
                    _this.ifData = true;
                }
                _this.events.map(function (oneEvent, i) {
                    if (_this.isLink(oneEvent.response)) {
                        oneEvent.isLink = true;
                    }
                    else {
                        oneEvent.isLink = false;
                    }
                });
            }
        });
    };
    DisplayEventPage.prototype.ionViewDidLoad = function () {
        this.user_id = localStorage.getItem('user_id');
        this.apiKey = localStorage.getItem('apiKey');
        this.role_id = localStorage.getItem('role_id');
        this.fillData();
    };
    DisplayEventPage.prototype.delete = function (id) {
        var _this = this;
        this.apiProvider.deleteEvent(id, this.apiKey, this.user_id).subscribe(function (data) {
            if (data['error'] === "SUCCESS") {
                _this.fillData();
            }
        });
    };
    DisplayEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-display-event',template:/*ion-inline-start:"C:\Users\paul-\Desktop\mexicainOutils\mexicainForm\src\pages\display-event\display-event.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mexicano</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item *ngIf="!ifData" class="square">\n      <p>Pas d\'évènements</p>\n\n    </ion-item>\n\n  <ion-col  col-10 style="margin: auto; padding-left: 1em;" *ngFor="let event of events">\n    <ion-item  class="square">\n      <p  class="white">{{event.event}}</p>\n\n      <p *ngIf="event.isLink"class="link" (click)="goInternet(event.response)">Liens</p>\n      <p *ngIf="!event.isLink" >{{event.response}}</p>\n\n\n      <p  class="red">Créateur : {{event.name}}</p>\n      <button *ngIf="role_id==\'1\'" ion-button clear color="light" class="btnRefuse" (click)="delete(event.id)">\n        Delete\n      </button>\n    </ion-item>\n\n    </ion-col>\n</ion-content>       '/*ion-inline-end:"C:\Users\paul-\Desktop\mexicainOutils\mexicainForm\src\pages\display-event\display-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], DisplayEventPage);
    return DisplayEventPage;
}());

//# sourceMappingURL=display-event.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, events, navParams, alertCtrl, formBuilder, apiProvider) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.apiProvider = apiProvider;
        this.credentialsForm = this.formBuilder.group({
            login: [''],
            password: [''],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.setAlert = function (titleAlert, contentAlert) {
        var alert = this.alertCtrl.create({
            title: titleAlert,
            subTitle: contentAlert,
            buttons: ['Fermer']
        });
        alert.present();
    };
    LoginPage.prototype.onSignIn = function () {
        var _this = this;
        this.apiProvider.login(this.credentialsForm.controls['login'].value, __WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA256(this.credentialsForm.controls['password'].value).toString(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.enc.Hex).toUpperCase()).subscribe(function (data) {
            if (data['error'] == 'ERROR_EMAIL') {
                _this.setAlert('Attention', 'Email incorrect.');
            }
            else {
                if (data['error'] == 'ERROR_PASSWORD') {
                    _this.setAlert('Attention', 'Mot de passe incorrect');
                }
                else {
                    if (data.data.isActive) {
                        if (data['error'] == 'SUCCESS') {
                            localStorage.setItem("user_id", data.data.id);
                            localStorage.setItem('role_id', data.data.role_id);
                            localStorage.setItem('apiKey', data.data.apiKey);
                            _this.events.publish('user:changed', localStorage.getItem('role_id'));
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                        }
                    }
                }
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\paul-\Desktop\mexicainOutils\mexicainForm\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n        <img src="assets/imgs/mexicain.png" width="100">\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content text-center>\n\n<p> MexicainJS</p>\n\n<form [formGroup]="credentialsForm">\n\n\n\n  <ion-item>\n\n    <ion-label  floating>Login</ion-label>\n\n    <ion-input  [formControl]="credentialsForm.controls[\'login\']" value=""\n\n        type="text"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label  floating>Mot de passe</ion-label>\n\n    <ion-input  [formControl]="credentialsForm.controls[\'password\']"value=""\n\n        type="password"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-row>\n\n    <ion-col text-center>\n\n      <button ion-button block color="button" (click)="onSignIn()">\n\n        Connexion\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\paul-\Desktop\mexicainOutils\mexicainForm\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/display-event/display-event.module": [
		314,
		1
	],
	"../pages/login/login.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_display_event_display_event__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_display_event_display_event__["a" /* DisplayEventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/display-event/display-event.module#DisplayEventPageModule', name: 'DisplayEventPage', segment: 'display-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_display_event_display_event__["a" /* DisplayEventPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_display_event_display_event__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, events, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.user_id = "1";
        this.initializeApp();
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: "Les évènements", component: __WEBPACK_IMPORTED_MODULE_0__pages_display_event_display_event__["a" /* DisplayEventPage */] }
        ];
        this.events.subscribe('user:changed', function (user_id) {
            _this.user_id = user_id;
            if (_this.user_id == "2") {
                _this.pages = [
                    { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
                    { title: "Les évènements", component: __WEBPACK_IMPORTED_MODULE_0__pages_display_event_display_event__["a" /* DisplayEventPage */] }
                ];
            }
            else {
                _this.pages = [
                    { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
                    { title: "Les évènements", component: __WEBPACK_IMPORTED_MODULE_0__pages_display_event_display_event__["a" /* DisplayEventPage */] },
                ];
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\paul-\Desktop\mexicainOutils\mexicainForm\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\paul-\Desktop\mexicainOutils\mexicainForm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.baseUrl = "http://home.paulsouille.fr:3000";
    }
    ApiProvider.prototype.getEvent = function () {
        var url = this.baseUrl + '/event/get';
        return this.http.get("" + url);
    };
    ApiProvider.prototype.login = function (login, password) {
        var url = this.baseUrl + '/login?login=' + login + '&password=' + password;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.addEvent = function (event, response, user_id) {
        var url = this.baseUrl + '/event/add?event=' + event + '&response=' + response + '&user_id=' + user_id;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.deleteEvent = function (id, apiKey, user_id) {
        var url = this.baseUrl + '/event/delete?event_id=' + id + '&apiKey=' + apiKey + '&user_id=' + user_id;
        return this.http.get("" + url);
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formBuilder, alertCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.credentialsForm = this.formBuilder.group({
            event: [''],
            response: [''],
        });
    }
    HomePage.prototype.setAlert = function (titleAlert, contentAlert) {
        var alert = this.alertCtrl.create({
            title: titleAlert,
            subTitle: contentAlert,
            buttons: ['Fermer']
        });
        alert.present();
    };
    HomePage.prototype.addEvent = function () {
        var _this = this;
        this.apiProvider.addEvent(this.credentialsForm.controls['event'].value, this.credentialsForm.controls['response'].value, localStorage.getItem('user_id')).subscribe(function (data) {
            if (data['error'] == 'ERROR_PARAM') {
                _this.setAlert('Attention', 'Remplissez les champs.');
            }
            else {
                if (data['error'] == 'ERROR_ALREADY') {
                    _this.setAlert('Attention', 'Cet évènement existe déjà.');
                }
                else {
                    if (data['error'] == 'ERROR') {
                        _this.setAlert('Succès', 'Une erreur est survenue.');
                    }
                    else {
                        if (data['error'] == 'SUCCESS') {
                            _this.credentialsForm.reset();
                            _this.setAlert('Succès', 'L\'évènement a été ajouté avec succès.');
                        }
                    }
                }
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\paul-\Desktop\mexicainOutils\mexicainForm\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mexicano</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n  <p> MexicainJS</p>\n  <form [formGroup]="credentialsForm">\n  \n    <ion-item>\n      <ion-label  floating>Event</ion-label>\n      <ion-input  [formControl]="credentialsForm.controls[\'event\']" value=""\n          type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label  floating>Response</ion-label>\n      <ion-input  [formControl]="credentialsForm.controls[\'response\']"value=""\n          type="text"></ion-input>\n    </ion-item>\n  \n    <ion-row>\n      <ion-col text-center>\n        <button ion-button block color="button" (click)="addEvent()">\n          Ajouter\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  \n  \n  </form>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\paul-\Desktop\mexicainOutils\mexicainForm\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map
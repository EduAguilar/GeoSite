webpackJsonp([1],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDetalleSitioPageModule", function() { return ModalDetalleSitioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_detalle_sitio__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalDetalleSitioPageModule = (function () {
    function ModalDetalleSitioPageModule() {
    }
    return ModalDetalleSitioPageModule;
}());
ModalDetalleSitioPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_detalle_sitio__["a" /* ModalDetalleSitioPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_detalle_sitio__["a" /* ModalDetalleSitioPage */]),
        ],
    })
], ModalDetalleSitioPageModule);

//# sourceMappingURL=modal-detalle-sitio.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetalleSitioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(194);
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
 * Generated class for the ModalDetalleSitioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalDetalleSitioPage = (function () {
    function ModalDetalleSitioPage(navCtrl, navParams, viewCtrl, launchNavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.launchNavigator = launchNavigator;
        this.sitio = this.navParams.data;
    }
    ModalDetalleSitioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalDetalleSitioPage');
    };
    ModalDetalleSitioPage.prototype.cerrarModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalDetalleSitioPage.prototype.comoLlegar = function () {
        var destino = this.sitio.lat + ', ' + this.sitio.lng;
        this.launchNavigator.navigate(destino)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    return ModalDetalleSitioPage;
}());
ModalDetalleSitioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-detalle-sitio',template:/*ion-inline-start:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/misSitios/src/pages/modal-detalle-sitio/modal-detalle-sitio.html"*/'<!--\n  Generated template for the ModalDetalleSitioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{sitio.adress}}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cerrarModal()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img [src]="sitio.foto" *ngIf="sitio.foto" />\n    <ion-card-content>\n       <ion-item text-wrap>\n          <h2>{{ sitio.address }}</h2>\n           <p>{{ sitio.description }}</p>\n        </ion-item>\n    </ion-card-content>\n    <ion-row> \n      <ion-col text-center>\n         <button ion-button icon-left clear small (click)="comoLlegar()">\n           <ion-icon name="navigate"></ion-icon>\n           <div>Como llegar</div>\n         </button> \n      </ion-col> \n    </ion-row>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/misSitios/src/pages/modal-detalle-sitio/modal-detalle-sitio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], ModalDetalleSitioPage);

//# sourceMappingURL=modal-detalle-sitio.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
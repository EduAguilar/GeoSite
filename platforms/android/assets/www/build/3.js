webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPageModule", function() { return ListadoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listado__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListadoPageModule = (function () {
    function ListadoPageModule() {
    }
    return ListadoPageModule;
}());
ListadoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__listado__["a" /* ListadoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listado__["a" /* ListadoPage */]),
        ],
    })
], ListadoPageModule);

//# sourceMappingURL=listado.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_db__ = __webpack_require__(99);
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
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListadoPage = (function () {
    function ListadoPage(navCtrl, navParams, db, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.modalCtrl = modalCtrl;
    }
    ListadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoPage');
    };
    ListadoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.db.getSitios().then(function (res) {
            _this.sitios = [];
            for (var i = 0; i < res.rows.length; i++) {
                _this.sitios.push({
                    id: res.rows.item(i).id,
                    lat: res.rows.item(i).lat,
                    lng: res.rows.item(i).lng,
                    address: res.rows.item(i).address,
                    description: res.rows.item(i).description,
                    foto: res.rows.item(i).foto
                });
            }
        }, function (err) { });
    };
    ListadoPage.prototype.muestraSitio = function (sitio) {
        var modalSitio = this.modalCtrl.create('ModalDetalleSitioPage', sitio);
        modalSitio.present();
    };
    return ListadoPage;
}());
ListadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listado',template:/*ion-inline-start:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/GeoSite/src/pages/listado/listado.html"*/'<!--\n  Generated template for the ListadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Listado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let sitio of sitios" (click)="muestraSitio(sitio)">\n      <ion-thumbnail item-left>\n        <img [src]="sitio.foto">\n      </ion-thumbnail>\n      <h2>{{ sitio.address }}</h2>\n      <p>{{ sitio.description }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/GeoSite/src/pages/listado/listado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], ListadoPage);

//# sourceMappingURL=listado.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
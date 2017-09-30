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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listado__["a" /* ListadoPage */]),
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




var ListadoPage = (function () {
    function ListadoPage(navCtrl, navParams, db, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    ListadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListadoPage');
    };
    ListadoPage.prototype.ionViewDidEnter = function () {
        this.llenarArraySitios();
    };
    ListadoPage.prototype.muestraSitio = function (sitio) {
        var modalSitio = this.modalCtrl.create('ModalDetalleSitioPage', sitio);
        modalSitio.present();
    };
    ListadoPage.prototype.borrarSitio = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar borrado',
            message: '¿Estás seguro de que deseas eliminar este sitio?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        // Ha respondido que no así que no hacemos nada
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.db.borrarSitio(id).then(function (res) {
                            // Una vez borrado el sitio recargamos el listado
                            _this.llenarArraySitios();
                        }, function (err) { });
                    }
                }
            ]
        });
        alert.present();
    };
    ListadoPage.prototype.llenarArraySitios = function () {
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
    return ListadoPage;
}());
ListadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listado',template:/*ion-inline-start:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/GeoSite/src/pages/listado/listado.html"*/'<!--\n  Generated template for the ListadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Listado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding #item *ngFor="let sitio of sitios">\n      <ion-item (click)="muestraSitio(sitio)">\n        <ion-thumbnail item-left>\n          <img [src]="sitio.foto">\n        </ion-thumbnail>\n        <h2>{{ sitio.address }}</h2>\n        <p>{{ sitio.description }}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n          <button ion-button  color="danger" (click)="borrarSitio(sitio.id)"><ion-icon name="trash"></ion-icon>\n             Borrar\n          </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/GeoSite/src/pages/listado/listado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_db_db__["a" /* DbProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ListadoPage);

//# sourceMappingURL=listado.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
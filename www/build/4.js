webpackJsonp([4],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioPageModule = (function () {
    function InicioPageModule() {
    }
    return InicioPageModule;
}());
InicioPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]),
        ],
    })
], InicioPageModule);

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, platform, geolocation, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.coords = { lat: 0, lng: 0 }; //en ella guardaremos un objeto con la latitud y longitud donde nos encontramos
        platform.ready().then(function () {
            // La plataforma esta lista y ya tenemos acceso a los plugins.
            _this.obtenerPosicion();
        });
    }
    /*ionViewDidLoad() {
      console.log('ionViewDidLoad InicioPage');
    }*/
    InicioPage.prototype.nuevoSitio = function () {
        // aquí vamos a abrir el modal para añadir nuestro sitio.
        var mimodal = this.modalCtrl.create('ModalNuevoSitioPage', this.coords);
        mimodal.present();
    };
    InicioPage.prototype.loadMap = function () {
        var mapContainer = document.getElementById('map');
        this.map = new google.maps.Map(mapContainer, {
            center: this.coords,
            zoom: 12,
        });
        // Colocamos el marcador
        var miMarker = new google.maps.Marker({
            icon: 'assets/img/ico_estoy_aqui.png',
            map: this.map,
            position: this.coords,
        });
    };
    InicioPage.prototype.obtenerPosicion = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.coords.lat = res.coords.latitude;
            _this.coords.lng = res.coords.longitude;
            _this.loadMap();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/GeoSite/src/pages/inicio/inicio.html"*/'<!--\n  Generated template for the InicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inicio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <div id="map"></div>\n    <ion-fab right top>\n        <button ion-fab (tap)="nuevoSitio()">\n          <ion-icon name="pin"></ion-icon>\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/GeoSite/src/pages/inicio/inicio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
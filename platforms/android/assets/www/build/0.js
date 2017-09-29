webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNuevoSitioPageModule", function() { return ModalNuevoSitioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_nuevo_sitio__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalNuevoSitioPageModule = (function () {
    function ModalNuevoSitioPageModule() {
    }
    return ModalNuevoSitioPageModule;
}());
ModalNuevoSitioPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_nuevo_sitio__["a" /* ModalNuevoSitioPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_nuevo_sitio__["a" /* ModalNuevoSitioPage */]),
        ],
    })
], ModalNuevoSitioPageModule);

//# sourceMappingURL=modal-nuevo-sitio.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNuevoSitioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_db__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalNuevoSitioPage = (function () {
    function ModalNuevoSitioPage(navCtrl, navParams, viewCtrl, camera, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.db = db;
        this.coords = { lat: 0, lng: 0 };
        this.description = '';
        this.foto = '';
    }
    ModalNuevoSitioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ModalNuevoSitioPage');
        this.coords.lat = this.navParams.get('lat');
        this.coords.lng = this.navParams.get('lng');
        this.getAddress(this.coords).then(function (results) {
            _this.address = results[0]['formatted_address'];
        }, function (errStatus) {
            // Aquí iría el código para manejar el error
        });
    };
    ModalNuevoSitioPage.prototype.cerrarModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalNuevoSitioPage.prototype.getAddress = function (coords) {
        var geocoder = new google.maps.Geocoder();
        return new Promise(function (resolve, reject) {
            geocoder.geocode({ 'location': coords }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    resolve(results);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    ModalNuevoSitioPage.prototype.sacarFoto = function () {
        var _this = this;
        var cameraOptions = {
            quality: 50,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 800,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.foto = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    ModalNuevoSitioPage.prototype.guardarSitio = function () {
        var _this = this;
        var sitio = {
            lat: this.coords.lat,
            lng: this.coords.lng,
            address: this.address,
            description: this.description,
            foto: this.foto
        };
        this.db.addSitio(sitio).then(function (res) {
            _this.cerrarModal();
            /*  alert('se ha introducido correctamente en la bd'); */
        }, function (err) { });
    };
    return ModalNuevoSitioPage;
}());
ModalNuevoSitioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-nuevo-sitio',template:/*ion-inline-start:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/misSitios/src/pages/modal-nuevo-sitio/modal-nuevo-sitio.html"*/'<!--\n  Generated template for the ModalNuevoSitioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nuevo Sitio</ion-title>\n\n    <ion-buttons start>\n      <button ion-button (click)="cerrarModal()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Localización actual\n    </ion-card-header>\n    <ion-card-content>\n      <p><strong>lat:</strong>{{ coords.lat}}<br/>\n      <strong>lng:</strong>{{coords.lng }}</p>\n      <hr>\n      <p>{{ address }}</p>\n      <hr/>\n      <form (ngSubmit)="guardarSitio()">\n      <ion-item>\n        <img [src]="foto" *ngIf="foto" />\n        <button ion-button icon-left full type="button" (tap)="sacarFoto()">\n          Foto&nbsp;&nbsp;          \n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-item>\n      <hr/>\n      <ion-item>\n        <ion-label>Descripción</ion-label>\n       \n      </ion-item>\n      <ion-textarea [(ngModel)]="description" name="description"></ion-textarea>\n\n      <button ion-button type="submit" block>Guardar Sitio</button>\n    </form>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/eduardo/Documentos/Proyecto Ing. Soft 2/misSitios/src/pages/modal-nuevo-sitio/modal-nuevo-sitio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__providers_db_db__["a" /* DbProvider */]])
], ModalNuevoSitioPage);

//# sourceMappingURL=modal-nuevo-sitio.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
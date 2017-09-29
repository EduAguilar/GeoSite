import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation'; 
import { Platform } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  map: any; // Manejador del mapa.
  coords : any = { lat: 0, lng: 0 }//en ella guardaremos un objeto con la latitud y longitud donde nos encontramos

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public  platform: Platform,
    private geolocation: Geolocation,
    public modalCtrl : ModalController) {
      platform.ready().then(() => {    
        // La plataforma esta lista y ya tenemos acceso a los plugins.
          this.obtenerPosicion();
       });
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }*/

  nuevoSitio(){
    // aquí vamos a abrir el modal para añadir nuestro sitio.
     let mimodal = this.modalCtrl.create( 'ModalNuevoSitioPage',this.coords );
     mimodal.present();
  }

  loadMap(){
    let mapContainer = document.getElementById('map');
     this.map = new google.maps.Map(mapContainer, {
       center: this.coords,
       zoom: 12,


    /*
      disableDefaultUI: true,
   
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{
        stylers: [
          { hue: "#00ffe6" },
          { saturation: -20 }]},  {featureType: "poi.business",elementType: "labels",
          stylers: [{ visibility: "off"}]
    }
  ]   */


     });
    // Colocamos el marcador
    let miMarker = new google.maps.Marker({
      icon : 'assets/img/ico_estoy_aqui.png',
      map: this.map,
      position: this.coords,
  });
  }
 
  obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;
    
      this.loadMap();
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }

}

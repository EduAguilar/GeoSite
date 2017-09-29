import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DbProvider {

  db: SQLiteObject = null;

  constructor(public sqlite: SQLite) {
    console.log('Hello DbProvider Provider');
  }
  //Metodo para conectar con la BD y crearla si no existe
  public openDb(){
    return this.sqlite.create({
        name: 'data.db',
        location: 'default' // el campo location es obligatorio
    })
    .then((db: SQLiteObject) => {
     this.db =db;
   })
  }

  //Método para crear tablas
  public createTableSitios(){
    return this.db.executeSql("create table if not exists sitios( id INTEGER PRIMARY KEY AUTOINCREMENT, lat FLOAT, lng FLOAT, address TEXT, description TEXT, foto TEXT )",{})
  }

  //Método para guardar nuestros sitios
  public addSitio(sitio){
    let sql = "INSERT INTO sitios (lat, lng, address, description, foto) values (?,?,?,?,?)";
    return this.db.executeSql(sql,[sitio.lat,sitio.lng,sitio.address,sitio.description,sitio.foto]);
  }

  public getSitios(){
    let sql = "SELECT * FROM sitios";
    return this.db.executeSql(sql,{});
  }  

}

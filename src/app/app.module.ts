import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopPageModule } from './modal/pop/pop.module';
import { PopComponentPageModule } from './popover/pop-component/pop-component.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
//var initSqlJs = require('sql.js');
import { query } from 'sql.js';

class SQLiteMock {
  public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    
    var db;
    var storeddb = localStorage.getItem("database");

    var arr = storeddb.split(',');
    if(storeddb)
    {
        db = new SQL.Database()
    }
    else
    {
        db = new SQL.Database();
    }

      return new Promise((resolve,reject)=>{
          resolve(new SQLiteObject(new Object(db)));
      });
  }
  } 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    PopPageModule,
    PopComponentPageModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    SQLite,
    SQLitePorter,
    {provide: SQLite, useClass: SQLiteMock},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

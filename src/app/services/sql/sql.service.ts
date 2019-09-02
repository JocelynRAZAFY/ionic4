import { Injectable } from '@angular/core';
import { isEmpty, isNull, keys, sortBy, get, parseInt } from 'lodash';
import { browserDBInstance } from './browser';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';


declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  dbInstance: any;
  SQL_DB_NAME: any
  constructor(
    public sqlite: SQLite, 
    private platform: Platform) { 
     // const SQL_DB_NAME = process.env.IONIC_ENV === 'dev' ? '__broswer.db' : '__native.db';
    }

    async init() {
      if (!this.platform.is('cordova')) {
        let db = window.openDatabase(this.SQL_DB_NAME, '1.0', 'DEV', 5 * 1024 * 1024);
        this.dbInstance = browserDBInstance(db);
      } else {
        this.dbInstance = await this.sqlite.create({
          name: this.SQL_DB_NAME,
          location: 'default'
        });
      }
    }
}

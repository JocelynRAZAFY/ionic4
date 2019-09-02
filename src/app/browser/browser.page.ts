import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss'],
})
export class BrowserPage implements OnInit {

  public database: SQLiteObject;
  public invoices: Array<Object>; // our data  
  public counter : number = 0;

  isLoading: boolean = false
  
  constructor(
    private sqlite : SQLite,
    private http: HttpClient,
    private sqlitePorter: SQLitePorter,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private alertController: AlertController) { }

  ngOnInit() {
    this.sqlite.create({name: "data.db", location: "default"})      
    .then((db : SQLiteObject) => {
      this.database = db;
      this.createInvoices()
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  createInvoices(){
    var colone: String;
    // FAMILLE
    colone = 'id INTEGER PRIMARY KEY, name TEXT';
    this.createTable('Invoices',colone)
    .then(res =>{
        console.log('Table Invoice created !');
        this.presentToast('Invoices OK')
    })
    .catch(e=>{
      this.presentAlert('Error CREATE Famille ' +JSON.stringify({e}),'Erreur')
    })
  }

  insertInvoice(){
    var c = 'INV' + this.counter; 
    this.database.executeSql("INSERT INTO invoices (name) VALUES (?)", [c]).then((data) => {
            console.log("INSERTED: ");
            this.counter++;
            this.showInvoices();
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });    
  }

  showInvoices(){
    this.database.executeSql("SELECT * FROM invoices", []).then((data) => {
            this.invoices = [];
            if(data.rows.length > 0) {
                for(var i = 0 ; i < data.rows.length ; i++) {
                    this.invoices.push({ name: data.rows.item(i).name });
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });    
  }

  createFamille(){
    var colone: String;
    // FAMILLE
    colone = 'id INTEGER PRIMARY KEY, code INTEGER, livre TEXT, nb TEXT, div TEXT, groupe TEXT, installed BOOLEAN, filename TEXT';
    this.createTable('Famille',colone)
    .then(res =>{
        this.presentToast('createFamille OK')
        this.fillDatabaseFamille('assets/sql/famille.sql')
    })
    .catch(e=>{
      this.presentAlert('Error CREATE Famille ' +JSON.stringify({e}),'Erreur')
    })
  }

  createTable(table,colonne){
    return this.database.executeSql('CREATE TABLE IF NOT EXISTS '+table+'('+colonne+')',[])
    .then(res => {
        return res;
    })
    .catch(e => {
      this.presentAlert('Error CREATE ' +JSON.stringify({e}),'Erreur')
    });
  
  }

  fillDatabaseFamille(path) {
    this.presentLoading('Chargement Famille ...')    
    this.http.get(path, { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.dismiss();
          this.presentToast('fillDatabase Famille OK '+path)
        })
        .catch(e => console.error(e));
    });
  }

  async presentAlert(msg: string, title: string) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading(msg) {
    this.isLoading = true;
    return await this.loadingController.create({
      message: msg,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}

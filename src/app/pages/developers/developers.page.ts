import { Component, OnInit } from '@angular/core';
import { DatabaseService, Dev } from 'src/app/services/database.service';
import { Observable } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {

  developers: Dev[] = [];
  products: Observable<any[]>;

  developer = {};
  product = {};

  selectedView = 'devs';
  isLoading = false;

  constructor(
    private db: DatabaseService,
    public loadingController: LoadingController) { }

    ngOnInit() {
      this.db.getDatabaseState().subscribe(rdy => {
        this.presentLoading()
        if (rdy) {
          this.db.getDevs().subscribe(devs => {
            this.developers = devs;
          })
          this.products = this.db.getProducts();
          this.dismiss();
        }
        
      });
    }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Chargement...',
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
  
  addDeveloper() {
    let skills = this.developer['skills'].split(',');
    skills = skills.map(skill => skill.trim());
 
    this.db.addDeveloper(this.developer['name'], skills, this.developer['img'])
    .then(_ => {
      this.db.presentAlert('addDeveloper')
      this.developer = {};
    });
  }

  addProduct() {
    this.db.addProduct(this.product['name'], this.product['creator'])
    .then(_ => {
      this.product = {};
    });
  }

}

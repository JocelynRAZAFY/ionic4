import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AlertController } from '@ionic/angular';
import { Crop } from '@ionic-native/crop/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@Component({
  selector: 'app-file-chooser',
  templateUrl: './file-chooser.page.html',
  styleUrls: ['./file-chooser.page.scss'],
})
export class FileChooserPage implements OnInit {

  file: string
  newImg: any
  img: any
  
  constructor(private fileChooser: FileChooser,
    public alertController: AlertController,
    private crop: Crop,
    private base64: Base64) { }

  ngOnInit() {
  }

  fileCho(){
    this.fileChooser.open()
  .then(uri => {
    //this.presentAlert(uri)
    this.file = uri
    this.imgOrigineToBase64(uri)
    this.cropImg(uri)
  })
  .catch(e => {
    this.file = e
  });
  }

  async presentAlert(uri) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: uri,
      buttons: ['OK']
    });

    await alert.present();
  }

  cropImg(path){
    this.crop.crop(path, {quality: 100})
    .then(
      newImage => {
        this.imgNewToBase64(newImage)
      },
      error => console.error('Error cropping image', error)
    );
  }

  imgNewToBase64(file){
    let filePath: string = file;
    this.base64.encodeFile(filePath).then((base64File: string) => {
      this.newImg = base64File
    }, (err) => {
      console.log(err);
    });
  }

  imgOrigineToBase64(fileOrigine){
    let filePath: string = fileOrigine;
    this.base64.encodeFile(filePath).then((base64File: string) => {
      this.file = base64File
    }, (err) => {
      console.log(err);
    });
  }
}

import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.page.html',
  styleUrls: ['./canvas.page.scss'],
})
export class CanvasPage implements OnInit {

  @ViewChild('myCanvas') canvas: any
  canvasElement: any
  avalaibleColors: any = []
  avalaibleSize: number[] = []
  currentColor: string = "#247BA0"
  currentSize: number = 5
  lastX: number
  lastY: number
  image: string
  screen: string
  state: boolean

  constructor(
    public platform: Platform, 
    public renderer: Renderer,
    private filePath: FilePath,
    private fileNative: File,
    private webview: WebView,
    private alertController: AlertController,
    private screenshot: Screenshot) {
    this.avalaibleColors = ['#247BA0','#70C1B3','#B2DBBF','#F3FFBD','#FF1654']
    this.avalaibleSize = [5,10,25,30,35,40]
   }

   async presentAlertConfirm(msg) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

   createPdf() {
    const div = document.getElementById('palette');
    const options = { background: 'white', height: 845, width: 595 };
    domtoimage.toPng(div, options).then((dataUrl) => {
        //Initialize JSPDF
        const doc = new jsPDF('p', 'mm', 'a4');
        //Add image Url to PDF
        doc.addImage(dataUrl, 'PNG', 0, 0, 210, 340);
        doc.save('pdfDocument.pdf');
    });
   }

   screenShot() {
    this.screenshot.save('jpg', 80, 'myscreenshot')
    .then(res => {
      let currentName = res.filePath.substring(res.filePath.lastIndexOf('/') + 1, res.filePath.lastIndexOf('?'));
      this.presentAlertConfirm('currentName: '+currentName +'-'+res.filePath)
     // this.copyFileToLocalDir(res.filePath, currentName, this.createFileName(),true); 
     // this.presentAlertConfirm(res.filePath)
     /* this.filePath.resolveNativePath(res.filePath)
              .then(filePath => {
                var fileName: string
                // file:///storage/emulated/0/Android/data/io.ionic.bible4/cache/
                  let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  // IMG_2378.JPG
                  let currentName = res.filePath.substring(res.filePath.lastIndexOf('/') + 1, res.filePath.lastIndexOf('?'));
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName(),true); 
              }).catch(err => {
                this.presentAlertConfirm('Error '+ JSON.stringify(err));
              }) */

      this.screen = res.filePath;
      this.state = true;
    //  this.reset();
    }).catch(e => {
      this.presentAlertConfirm(e)
    })
  }

  // Create a new name for the image
  createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }

  screenShotURI() {
    this.screenshot.URI(80)
    .then(res => {
     // this.presentAlertConfirm(res.URI)
      this.screen = res.URI;
      this.state = true;
     // this.reset();
    }).catch(e => {
      this.presentAlertConfirm(e)
    })
  }

  reset() {
    var self = this;
    setTimeout(function(){ 
      self.state = false;
    }, 1000);
  }

   print(){
    
    /*domtoimage.toBlob(document.getElementById('capture'))
      .then(function (blob) {
        console.log(blob)
       // this.presentAlertConfirm(blob)
        this.presentAlertConfirm(blob)
        this.filePath.resolveNativePath(blob)
        .then(filePath => {
          var fileName: string
          // file:///storage/emulated/0/Android/data/io.ionic.bible4/cache/
            const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            // IMG_2378.JPG
            const currentName = blob.substring(blob.lastIndexOf('/') + 1, blob.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(),true)
        }).catch(err => {
          this.toolsService.presentAlert('Error '+ JSON.stringify(err));
        })
          console.log(blob)
      });*/
   }

   copyFileToLocalDir(correctPath, currentName, newFileName,add) {
  //  var filePath: string = this.fileNative.dataDirectory + newFileName
  //  var resPath: string = this.pathForImage(filePath)

   /* this.fileLocal.correctPath = correctPath
    this.fileLocal.currentName = currentName
    this.fileLocal.newFileName = newFileName
    this.fileLocal.add = add
    this.fileLocal.filePath = filePath
    this.fileLocal.resPath = resPath*/
  //  this.toolsService.presentAlert(resPath)
    this.fileNative.copyFile(correctPath, currentName, this.fileNative.dataDirectory, newFileName)
    .then(success => {
      const filePath: string = this.fileNative.dataDirectory + newFileName
      const resPath: string = this.pathForImage(filePath)
      this.image = resPath
      this.screen = resPath
    }, error => {
    //  this.toolsService.presentAlert(error)
    });
  }

  pathForImage(filePath) {
    if (filePath === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(filePath);
      return converted;
    }
  }

  ngOnInit() {
    this.print()
  }

  changeColor(color){
    this.currentColor = color
  }

  changeSize(size){
    this.currentSize = size
  }
  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement
    console.log(this.platform.height())

    this.renderer.setElementAttribute(this.canvasElement,'width',this.platform.width())
    this.renderer.setElementAttribute(this.canvasElement,'height',this.platform.height()+'')
  }

  handleStart(e){
    this.lastX = e.touches[0].pageX
    this.lastY = e.touches[0].pageY
    
  }
  handlemove(e){

    let ctx = this.canvasElement.getContext('2d')
    let curentX = e.touches[0].pageX
    let curentY = e.touches[0].pageY

    ctx.beginPath()
    ctx.lineJoin = 'round'
    ctx.moveTo(this.lastX,this.lastY)
    ctx.lineTo(curentX,curentY)
    ctx.closePath()
    ctx.strokeStyle = this.currentColor
    ctx.lineWidth = this.currentSize
    ctx.stroke()

    this.lastX = curentX
    this.lastY = curentY
    //console.log(this.lastX+'-'+this.lastY)
  }
  
  handleEnd(e){
    
    console.log(e)
  }
  
}

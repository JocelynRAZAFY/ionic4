import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatsRoutingModule } from './nats.router.module';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NatsRoutingModule
  ],
  providers:[
    FileChooser,
    Crop,
    Base64
  ]
})
export class NatsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPage } from './tab.page';
import { TabRoutingModule } from './tab.router.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRoutingModule
  ],
  declarations: [TabPage]
})
export class TabPageModule {}

import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopComponentPage } from '././pop-component/pop-component.page'
@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopComponentPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  segments = [
    {title: 'Segment', path: '/segment/segment'},
    {title: 'Segment button', path: '/segment/button'}
  ]
  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  showDetail(segment){
    let navigationOptions: NavigationOptions = {
      queryParams: {
        segment: JSON.stringify(segment)
      }
  };
    this.navController.navigateForward([segment.path], navigationOptions)
  }
}

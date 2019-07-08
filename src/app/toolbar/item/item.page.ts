import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  toolbars = [
    {title: 'Toolbar', path: '/toolbar/toolbar'},
    {title: 'Header', path: '/toolbar/header'},
    {title: 'Footer', path: '/toolbar/footer'},
    {title: 'Title', path: '/toolbar/title'},
    {title: 'Buttons', path: '/toolbar/buttons'},
    {title: 'Back Button', path: '/toolbar/back-button'}
  ]
  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  showDetail(toolbar){
    let navigationOptions: NavigationOptions = {
      queryParams: {
        tech: JSON.stringify(toolbar)
      }
  };
    this.navController.navigateForward([toolbar.path], navigationOptions)
  }
}

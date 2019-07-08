import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  searchs = [
    {title: 'Searchbar', path: '/searchbar/search'},
    {title: 'Data', path: '/searchbar/data'}
  ]

  showDetail(radio){
    let navigationOptions: NavigationOptions = {
      queryParams: {
        tech: JSON.stringify(radio)
      }
  };
    this.navController.navigateForward([radio.path], navigationOptions)
  }
}

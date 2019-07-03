import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  public appItems = [
    {
      title: 'Avatar',
      url: '/media/avatar',
      icon: 'home'
    },
    {
      title: 'Image',
      url: '/media/img',
      icon: 'home'
    },
    {
      title: 'Thumbnail',
      url: '/media/thumbnail',
      icon: 'home'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

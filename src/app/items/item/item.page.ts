import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  public appItems = [
    {
      title: 'Item Basic',
      url: '/items/basic',
      icon: 'home'
    },
    {
      title: 'Item Detail Arrow',
      url: '/items/arrows',
      icon: 'home'
    },
    {
      title: 'List Items',
      url: '/items/list-items',
      icon: 'home'
    },
    {
      title: 'Item Lines',
      url: '/items/item-lines',
      icon: 'home'
    },
    {
      title: 'Media Item',
      url: '/items/media-items',
      icon: 'home'
    },
    {
      title: 'Buttons in Items',
      url: '/items/buttons-items',
      icon: 'home'
    },
    {
      title: 'Icons in Items',
      url: '/items/icons-items',
      icon: 'home'
    },
    {
      title: 'Item Inputs',
      url: '/items/item-inputs',
      icon: 'home'
    },
    {
      title: 'Item Dividers',
      url: '/items/item-dividers',
      icon: 'home'
    },
    {
      title: 'Item Group',
      url: '/items/item-group',
      icon: 'home'
    },
    {
      title: 'Item Sliding',
      url: '/items/item-sliding',
      icon: 'home'
    },
    {
      title: 'Label',
      url: '/items/label',
      icon: 'home'
    },
    {
      title: 'Note',
      url: '/items/note',
      icon: 'home'
    },
  ]
  constructor() { }

  ngOnInit() {
    console.log('ICI')
  }

}

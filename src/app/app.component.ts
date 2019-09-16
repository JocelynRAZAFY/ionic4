import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Canvas',
      url: '/canvas',
      icon: 'browsers'
    },
    {
      title: 'Index',
      url: '/tabs',
      icon: 'tablet-portrait'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Action Sheet',
      url: '/action-sheet',
      icon: 'magnet'
    },
    {
      title: 'Alert',
      url: '/alert',
      icon: 'alert'
    },
    {
      title: 'Badge',
      url: '/badge',
      icon: 'star-outline'
    },
    {
      title: 'Button',
      url: '/button',
      icon: 'radio-button-off'
    },
    {
      title: 'Card',
      url: '/card',
      icon: 'card'
    },
    {
      title: 'Checkbox',
      url: '/checkbox',
      icon: 'checkbox-outline'
    },
    {
      title: 'Chip',
      url: '/chip',
      icon: 'filing'
    },
    {
      title: 'Datetime',
      url: '/datetime',
      icon: 'calendar'
    },
    {
      title: 'Fab',
      url: '/fab',
      icon: 'bookmarks'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'grid'
    },
    {
      title: 'Infinite',
      url: '/infinite',
      icon: 'infinite'
    },
    {
      title: 'Input',
      url: '/input',
      icon: 'log-in'
    },
    {
      title: 'Item',
      url: '/items',
      icon: 'pricetags'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Media',
      url: '/media',
      icon: 'videocam'
    },
    {
      title: 'Modal Nav',
      url: '/modal',
      icon: 'logo-model-s'
    },
    {
      title: 'Pop over',
      url: '/popover',
      icon: 'beaker'
    },
    {
      title: 'Loading',
      url: '/loading',
      icon: 'cloud-upload'
    },
    {
      title: 'Spinner',
      url: '/spinner',
      icon: 'bug'
    },
    {
      title: 'Radio',
      url: '/radio',
      icon: 'radio-button-on'
    },
    {
      title: 'Range',
      url: '/range',
      icon: 'git-branch'
    },
    {
      title: 'Refresher',
      url: '/refresher',
      icon: 'refresh-circle'
    },
    {
      title: 'Reorder',
      url: '/reorder',
      icon: 'reorder'
    },
    {
      title: 'Searchbar',
      url: '/searchbar',
      icon: 'search'
    },
    {
      title: 'Segment',
      url: '/segment',
      icon: 'hammer'
    },
    {
      title: 'Select',
      url: '/select',
      icon: 'easel'
    },
    {
      title: 'Slide',
      url: '/slide',
      icon: 'albums'
    },
    {
      title: 'Tab',
      url: '/tab',
      icon: 'business'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'logo-octocat'
    },
    {
      title: 'Toggle',
      url: '/toggle',
      icon: 'thunderstorm'
    },
    {
      title: 'Toolbar',
      url: '/toolbar',
      icon: 'barcode'
    },
    {
      title: 'Text',
      url: '/text',
      icon: 'text'
    },
    {
      title: 'Native',
      url: '/nats',
      icon: 'planet'
    },
    {
      title: 'Developers',
      url: '/developers',
      icon: 'bug'
    },
    {
      title: 'Browser',
      url: '/browser',
      icon: 'browsers'
    }
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

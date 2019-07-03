import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-pop',
  templateUrl: './pop.page.html',
  styleUrls: ['./pop.page.scss'],
})
export class PopPage implements OnInit {

  items = [
    { name: 'Gollum', title: 'Sneaky little hobbitses!', image: '/assets/avatar/avatar-gollum.jpg'},
    { name: 'Frodo', title: 'Go back, Sam! I\'m going to Mordor alone!', image: '/assets/avatar/avatar-frodo.jpg'},
    { name: 'Samwise', title: 'What we need is a few good taters.', image: '/assets/avatar/avatar-samwise.jpg'}
  ]
  constructor(
    public navParams: NavParams,
    public modalController: ModalController ) { 
    console.log(navParams.get('firstName'))
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}

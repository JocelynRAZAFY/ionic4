import { Component, OnInit } from '@angular/core';
//import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-push',
  templateUrl: './push.page.html',
  styleUrls: ['./push.page.scss'],
})
export class PushPage implements OnInit {

  tech: any
  
  constructor(
    public activatedRoute: ActivatedRoute) { 
      this.activatedRoute.queryParams.subscribe(params => {
        this.tech = JSON.parse(params["tech"]);
    });
    
  }

  ngOnInit() {
  }

}

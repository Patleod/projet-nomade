import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { HomePage } from './home';
import { EventPage } from './event';
import { MapPage } from './directory/pages'; 

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage = EventPage;
  @ViewChild('appNav') nav: NavController

  constructor(platform: Platform, public translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available. 
      this.translationConfig(); 
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  translationConfig() {
    let userLang = navigator.language.split('-')[0];
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'fr';
    console.log(navigator.language.split('-')[0]);
    console.log(userLang);
    this.translate.setDefaultLang('fr');
    this.translate.use(userLang);

  }

   ngOnInit() {
      // Let's navigate from TabsPage to Page1
      // this.nav.push(MapPage);
   }
}

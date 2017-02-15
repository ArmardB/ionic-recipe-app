import { SignUpPage } from './../pages/sign-up/sign-up';
import { SignInPage } from './../pages/sign-in/sign-in';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from './../pages/tabs/tabs';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  signInPage = SignInPage;
  signUpPage = SignUpPage;
  // Needed to initialize navigation of side menu
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogOut() {
    
  }
}

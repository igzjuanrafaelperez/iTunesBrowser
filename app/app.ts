import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { SearchPage } from './pages/search/search';
import { SettingsPage } from './pages/settings/settings';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';

@Component({
  templateUrl: 'build/app.html',
  providers: [HTTP_PROVIDERS, JSONP_PROVIDERS]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SearchPage;

  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page uno', component: Page1 },
      { title: 'Page dos', component: Page2 },
      { title: 'Settings', component: SettingsPage },
      { title: 'Page search', component: SearchPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {

  countries: Array<Object>
  selectedCountry: Object

  constructor(private nav:NavController) {
    this.countries = [
      {name: 'United States', local_name: 'USA', code: 'us', currency: '$'}, {
      name: 'United Kingdom',
      code: 'gb',
      local_name: 'The UK',
      currency: '£'
    }, {name: 'Russia', local_name: 'Россия', code: 'ru', rtl: true}];

  }

  select (country) {
    console.log('SELECTED >> ' + country.code)
    this.selectedCountry = country
  }
}

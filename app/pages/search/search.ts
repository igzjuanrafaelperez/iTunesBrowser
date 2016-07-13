import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import {Itunes} from '../../providers/itunes/itunes'

/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/search/search.html',
  providers: [Itunes]
})
export class SearchPage {

  results: Array<Object>
  keyword: String

  constructor(private nav: NavController, private itunes: Itunes) {
    this.results = []
    this.keyword = ''
  }

  userPressedCancel(){
    this.results = []
    this.keyword = ''
  }

  keyHasBeenPressed(ev) {
    if (ev.keyIdentifier === 'Enter' ) {
        this.itunes.search(this.keyword)
            .then(res => this.results = res)
    }
  }
}

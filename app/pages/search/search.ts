import { Component} from '@angular/core';
import { NavController, ActionSheet, Modal } from 'ionic-angular';
import { PreviewModal } from './preview';
import { Itunes } from '../../providers/itunes/itunes'

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

  results: Array<any>
  keyword: String
  usesFilter: boolean
  _unfilteredResults: Array<any>


  constructor(private nav: NavController, private itunes: Itunes) {
    this.results = []
    this.keyword = ''
    this._unfilteredResults = []
    this.usesFilter = false

  }

  userPressedCancel(){
    this.results = []
    this.keyword = ''
  }

  keyHasBeenPressed(ev) {
    if (ev.keyIdentifier === 'Enter' ) {
        this.itunes.search(this.keyword)
            .then(res => {
              this.results = res
              this._unfilteredResults = res
              this.usesFilter = false
            })
    }
  }

  openFilters(){
    let sheet = ActionSheet.create({
      title: 'Filter by ...',
      buttons: [
        {
          text: 'Movies only',
          handler: () => {
            this.results = this._unfilteredResults.filter( (item) => item.kind === 'feature-movie' )
            this.usesFilter = true
          }
        },
        {
          text: 'Songs only',
          handler: () => {
            this.results = this._unfilteredResults.filter( (item) => item.kind === 'song' )
            this.usesFilter = true
          }
        },
        {
          text: 'Clear',
          style: 'destructive',
          handler: () => {
            this.results = this._unfilteredResults
            this.usesFilter = false
          }
        },
        {
          text: 'Canel',
          style: 'cancel'
        }
      ]
    })
    this.nav.present(sheet)
  }

  openPreview( track ){
    let modal = Modal.create(PreviewModal, {
      track: track
    })
    this.nav.present(modal)
  }
}

import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { SearchPage } from "../search/search"

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  theSearchPage: any

  constructor(private navController: NavController) {
    this.theSearchPage = SearchPage
  }

  goToSearch() {
    this.navController.setRoot(SearchPage)
  }
}

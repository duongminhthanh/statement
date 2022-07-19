import { Component, OnInit } from '@angular/core';

import { CardColor } from './portlets.model';

import { cardColor } from './data';

@Component({
  selector: 'app-portlets',
  templateUrl: './portlets.component.html',
  styleUrls: ['./portlets.component.scss']
})

/**
 * Portlets component - handling the portlets with sidebar and content
 */
export class PortletsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Card color data
  cardColor: CardColor[];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'UI Elements', path: '/' }, { label: 'Portlets', path: '/', active: true }];

    /**
     * Fetches data
     */
    this._fetchData();
  }
  /**
   * on card content refresh
   */
  contentRefresh() {
    console.log('card data refresh requested');
  }
  /**
   * Fetches the card value
   */
  private _fetchData() {
    this.cardColor = cardColor;
  }
}

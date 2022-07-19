import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remix',
  templateUrl: './remix.component.html',
  styleUrls: ['./remix.component.scss']
})

/**
 * Remix component - handling the remix icon with sidebar and content
 */
export class RemixComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Icons', path: '/' }, { label: 'Remix', path: '/', active: true }];

  }

}

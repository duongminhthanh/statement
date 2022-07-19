import { Component, OnInit } from '@angular/core';

import { Project } from './profile.model';

import { projectData } from './data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

/**
 * Profile component - handling the profile with sidebar and content
 */
export class ProfileComponent implements OnInit {

  // bread crumb data
  breadCrumbItems: Array<{}>;

  // Projects table
  projectData: Project[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Extras', path: '/' }, { label: 'Profile', path: '/', active: true }];
    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the profile value
   */
  private _fetchData() {
    // project table data
    this.projectData = projectData;
  }
}

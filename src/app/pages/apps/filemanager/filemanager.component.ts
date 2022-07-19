import { Component, OnInit } from '@angular/core';

import { File } from './filemanager.model';

import { fileManagerData } from './data';

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})

/**
 * File-manager component - handling the fime manager with sidebar and content
 */
export class FilemanagerComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // File data
  fileManagerData: File[];

  constructor() { }

  ngOnInit() {

    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Apps', path: '/' }, { label: 'File Manager', path: '/', active: true }];

    /**
     * Fetches data
     */
    this._fetchdata();
  }

  /**
   * Uploaded file data save
   * @param event File data
   */
  saveFile(event) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < event.target.files.length; i++) {
      const name = event.target.files[i].name;
      const size = Math.round(event.target.files[i].size / 1024) + ' KB';
      const date = event.target.files[i].lastModifiedDate;

      this.fileManagerData.push({
        name,
        date,
        size,
        users: ['assets/images/users/avatar-1.jpg']
      });
    }
  }

  /**
   * Fetches the file value
   */
  private _fetchdata() {
    // File Data
    this.fileManagerData = fileManagerData;
  }
}

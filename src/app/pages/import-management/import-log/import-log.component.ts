import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-log',
  templateUrl: './import-log.component.html',
  styleUrls: ['./import-log.component.scss']
})
export class ImportLogComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;
  
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];
  }

}

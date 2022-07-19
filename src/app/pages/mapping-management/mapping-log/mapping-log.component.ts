import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping-log',
  templateUrl: './mapping-log.component.html',
  styleUrls: ['./mapping-log.component.scss']
})
export class MappingLogComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Mapping management', path: '/' }, { label: 'Mapping Log', path: '/', active: true }];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping-data',
  templateUrl: './mapping-data.component.html',
  styleUrls: ['./mapping-data.component.scss']
})
export class MappingDataComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Mapping management', path: '/' }, { label: 'Mapping Data', path: '/', active: true }];
  }

}

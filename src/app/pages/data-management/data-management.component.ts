import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
export class DataManagementComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;

  constructor(
    
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Data management', path: '/', active: true}];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc-management',
  templateUrl: './abc-management.component.html',
  styleUrls: ['./abc-management.component.scss']
})
export class AbcManagementComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;

  constructor(
    
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Data management', path: '/', active: true}];
  }

}

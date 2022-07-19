import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-search',
  templateUrl: './report-search.component.html',
  styleUrls: ['./report-search.component.scss']
})
export class ReportSearchComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;
  
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Report management', path: '/' }, { label: 'Report Approve', path: '/', active: true }];
  }

}

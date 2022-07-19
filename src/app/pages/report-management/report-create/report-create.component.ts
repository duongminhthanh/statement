import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.scss']
})
export class ReportCreateComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Report management', path: '/' }, { label: 'Report Create', path: '/', active: true }];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-approve',
  templateUrl: './report-approve.component.html',
  styleUrls: ['./report-approve.component.scss']
})
export class ReportApproveComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Report management', path: '/' }, { label: 'Report Approve', path: '/', active: true }];
  }

}

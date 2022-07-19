import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"]
})

export class ReportComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;
  
  constructor() { 

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];

  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-batch-management",
  templateUrl: "./batch-management.component.html",
  styleUrls: ["./batch-management.component.scss"]
})

export class BatchManagementComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

  constructor() { 

  }

  ngOnInit() {
	//   console.log('abc')
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
	{ label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];
  }
}

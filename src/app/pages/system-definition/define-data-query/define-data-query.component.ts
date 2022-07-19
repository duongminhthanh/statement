import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-define-data-query",
  templateUrl: "./define-data-query.component.html",
  styleUrls: ["./define-data-query.component.scss"]
})

export class DefineDataQueryComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

  constructor() { 

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];

  }
}

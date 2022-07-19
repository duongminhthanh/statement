import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-broker-confirmation",
  templateUrl: "./broker-confirmation.component.html",
  styleUrls: ["./broker-confirmation.component.scss"]
})

export class BrokerConfirmationComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

  constructor() { 

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];

  }
}

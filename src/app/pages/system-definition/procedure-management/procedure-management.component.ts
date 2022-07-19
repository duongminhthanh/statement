import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-procedure-management",
  templateUrl: "./procedure-management.component.html",
  styleUrls: ["./procedure-management.component.scss"]
})

export class ProcedureManagementComponent implements OnInit {
    breadCrumbItems: Array<{}>;
  isCollapsed = false;

  proceduremanagementList: Array<any> = [];

  constructor() { 

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Data management', path: '/', active: true}];

	this.proceduremanagementList = [
		{
			fileName: 'file 1',
			creator: 'Nguyen Van A',
			createdDate: new Date(),
			modifiedDate: new Date()
		},
		{
			fileName: 'file 2',
			creator: 'Nguyen Van B',
			createdDate: new Date(),
			modifiedDate: new Date()
		}
	]

  }
}

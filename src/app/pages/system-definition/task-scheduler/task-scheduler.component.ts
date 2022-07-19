import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task-scheduler",
  templateUrl: "./task-scheduler.component.html",
  styleUrls: ["./task-scheduler.component.scss"]
})

export class TaskSchedulerComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

  constructor() { 

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];

  }
}

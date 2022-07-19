import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-define-data-editor",
  templateUrl: "./define-data-editor.component.html",
  styleUrls: ["./define-data-editor.component.scss"]
})

export class DefineDataEditorComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

  constructor() { 

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];


  }
}

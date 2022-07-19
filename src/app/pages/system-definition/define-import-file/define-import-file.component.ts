import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-define-import-file",
  templateUrl: "./define-import-file.component.html",
  styleUrls: ["./define-import-file.component.scss"]
})

export class DefineImportFileComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;
  
  constructor() { 

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];

  }
}

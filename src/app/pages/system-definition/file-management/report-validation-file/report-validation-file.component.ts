import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ReportValidationModalComponent } from "./report-validation-modal/report-validation-modal.component";

@Component({
  selector: "app-report-validation-file",
  templateUrl: "./report-validation-file.component.html",
  styleUrls: ["./report-validation-file.component.scss"]
})

export class ReportValidationFileComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

	reportvalidationFileList: Array<any> = [];



  constructor(
	  private modalService: NgbModal,
	) { }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Data management', path: '/', active: true}];

	this.reportvalidationFileList = [
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
		},
		{
			fileName: 'file 3',
			creator: 'Nguyen Van C',
			createdDate: new Date(),
			modifiedDate: new Date()
		}
	]

  }
  openCreateModal() {
    const modalRef = this.modalService.open(ReportValidationModalComponent, { centered: true, size: 'lg', scrollable: true });
}
}

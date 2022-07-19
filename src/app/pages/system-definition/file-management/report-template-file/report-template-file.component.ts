import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ReportTemplateModalComponent } from "./report-template-modal/report-template-modal.component";

@Component({
  selector: "app-report-template-file",
  templateUrl: "./report-template-file.component.html",
  styleUrls: ["./report-template-file.component.scss"]
})

export class ReportTemplateFileComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;

  reporttemplateFileList: Array<any> = [];

  constructor(
	private modalService: NgbModal,
  ) { }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Data management', path: '/', active: true}];

	this.reporttemplateFileList = [
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
  openCreateModal() {
    const modalRef = this.modalService.open(ReportTemplateModalComponent, { centered: true, size: 'lg', scrollable: true });
  }
}

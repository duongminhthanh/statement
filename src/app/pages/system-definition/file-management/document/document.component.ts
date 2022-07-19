import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ReportValidationModalComponent } from "../report-validation-file/report-validation-modal/report-validation-modal.component";
import { DocumentModalComponent } from "./document-modal/document-modal.component";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.scss"]
})

export class DocumentComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

  constructor(
	  private modalService: NgbModal,
  ) { 
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Data management', path: '/', active: true}];

  }

  ngOnInit() {

  }
  openCreateModal() {
    const modalRef = this.modalService.open(DocumentModalComponent, { centered: true, size: 'lg', scrollable: true });
}
}

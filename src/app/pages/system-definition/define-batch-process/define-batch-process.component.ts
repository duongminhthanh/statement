import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DocumentModalComponent } from "../file-management/document/document-modal/document-modal.component";

@Component({
  selector: "app-define-batch-process",
  templateUrl: "./define-batch-process.component.html",
  styleUrls: ["./define-batch-process.component.scss"]
})

export class DefineBatchProcessComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

  constructor(
    private modalService: NgbModal,
  ) { 
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Data management', path: '/', active: true}];

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];


  }
  openCreateModal() {
    const modalRef = this.modalService.open(DocumentModalComponent, { centered: true, size: 'lg', scrollable: true });
}
}

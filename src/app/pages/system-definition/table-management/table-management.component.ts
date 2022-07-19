import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TableManagementModalComponent } from "./table-management-modal/table-management-modal.component";

@Component({
  selector: "app-table-management",
  templateUrl: "./table-management.component.html",
  styleUrls: ["./table-management.component.scss"]
})

export class TableManagementComponent implements OnInit {
	breadCrumbItems: Array<{}>;
	isCollapsed = false;

  constructor(
	private modalService: NgbModal,
  ) { 

  }

  ngOnInit() {
	this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Import management', path: '/' }, { label: 'Import Log', path: '/', active: true }];

  }
  openCreateModal() {
    const modalRef = this.modalService.open(TableManagementModalComponent, { centered: true, size: 'lg', scrollable: true });
}
}

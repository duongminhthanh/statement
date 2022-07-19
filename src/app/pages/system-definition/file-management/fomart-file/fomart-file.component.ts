import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DepartmentModalComponent } from "src/app/pages/admin-management/department-management/department-modal/department-modal.component";
import { FomartModalComponent } from "./fomart-modal/fomart-modal.component";

@Component({
  selector: "app-fomart-file",
  templateUrl: "./fomart-file.component.html",
  styleUrls: ["./fomart-file.component.scss"]
})

export class FomartFileComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  isCollapsed = false;

	formatFileList: Array<any> = [];

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, 
    { label: 'Data management', path: '/', active: true}];

	this.formatFileList = [
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
    const modalRef = this.modalService.open(FomartModalComponent, { centered: true, size: 'lg', scrollable: true });
  }
}

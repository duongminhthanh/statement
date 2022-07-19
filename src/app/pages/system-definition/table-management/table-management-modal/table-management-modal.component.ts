import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-table-management-modal",
  templateUrl: "./table-management-modal.component.html",
  styleUrls: ["./table-management-modal.component.scss"]
})

export class TableManagementModalComponent implements OnInit {
  
  constructor(
	public activeModal: NgbActiveModal,
  ) { 

  }

  ngOnInit() {

  }
}

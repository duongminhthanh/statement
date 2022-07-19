import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-report-validation-modal",
  templateUrl: "./report-validation-modal.component.html",
  styleUrls: ["./report-validation-modal.component.scss"]
})

export class ReportValidationModalComponent implements OnInit {
  
  constructor(
	public activeModal: NgbActiveModal,
  ) { 

  }

  ngOnInit() {

  }
}

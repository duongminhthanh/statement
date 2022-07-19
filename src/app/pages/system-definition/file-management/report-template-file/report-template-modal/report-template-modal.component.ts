import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-report-template-modal",
  templateUrl: "./report-template-modal.component.html",
  styleUrls: ["./report-template-modal.component.scss"]
})

export class ReportTemplateModalComponent implements OnInit {
  
  constructor(
	public activeModal: NgbActiveModal,
  ) { 

  }

  ngOnInit() {

  }
}

import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-fomart-modal",
  templateUrl: "./fomart-modal.component.html",
  styleUrls: ["./fomart-modal.component.scss"]
})

export class FomartModalComponent implements OnInit {
  
  constructor(
	public activeModal: NgbActiveModal,
  ) { 

  }

  ngOnInit() {

  }
}

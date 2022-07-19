import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-working-date-modal',
  templateUrl: './working-date-modal.component.html',
  styleUrls: ['./working-date-modal.component.scss']
})
export class WorkingDateModalComponent implements OnInit {

  @Input() title: any;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }
}

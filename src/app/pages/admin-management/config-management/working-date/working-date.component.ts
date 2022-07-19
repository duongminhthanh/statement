import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkingDateModalComponent } from './working-date-modal/working-date-modal.component';

@Component({
  selector: 'app-working-date',
  templateUrl: './working-date.component.html',
  styleUrls: ['./working-date.component.scss']
})
export class WorkingDateComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  isCollapsed = false;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page', path: '/' }, 
    { label: 'Administration', path: '/' }, 
    { label: 'Config Management', path: '/' },
    { label: 'Working Date', path: '/', active: true }];
  }

  openCreateModal(item: any) {
    const modalRef = this.modalService.open(WorkingDateModalComponent, { centered: true, size: 'lg', scrollable: true });
    if (item) {
      modalRef.componentInstance.item = item;
    }
    modalRef.componentInstance.title = item ? 'Edit' : 'Create';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.modalService.dismissAll();
    });
  }

}

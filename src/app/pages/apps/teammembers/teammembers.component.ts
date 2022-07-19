import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TeamMember } from './teammembers.model';

import { teamData } from './data';

@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrls: ['./teammembers.component.scss']
})

/**
 * Team member component - handling the team-member with sidebar and content
 */
export class TeammembersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;
  // validation form
  validationform: FormGroup;

  // page number
  page = 1;
  // default page size
  pageSize = 6;

  // start and end index
  startIndex = 1;
  endIndex = 6;
  totalSize = 0;
  // Team data
  paginatedTeamData: Array<TeamMember>;
  // all the team members
  teamMembers: Array<TeamMember>;

  constructor(private modalService: NgbModal, public formBuilder: FormBuilder) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Team Members', path: '/', active: true }];
    /**
     * Model data validation
     */
    this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      company: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });

    /**
     * Fetches Data
     */
    this._fetchData();
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }
  /**
   * Modal Open
   * @param content modal content
   */
  openModal(content: string) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * save the team member data
   */
  saveData() {
    const name = this.validationform.get('name').value;
    const designation = this.validationform.get('position').value;
    const website = this.validationform.get('email').value;

    if (this.validationform.valid) {
      this.teamMembers.push({
        user: 'assets/images/users/avatar-1.jpg',
        name,
        designation,
        website,
        icon: ['mdi mdi-facebook', 'mdi mdi-google', 'mdi mdi-github-circle']
      });
      this.validationform = this.formBuilder.group({
        name: '',
        position: '',
        company: '',
        email: ''
      });
      this.modalService.dismissAll();
    }
    this.submitted = true;
    this.totalSize = this.teamMembers.length + 1;
    this.paginatedTeamData = this.teamMembers.slice(this.startIndex, this.endIndex);
  }

  /**
   * Pagination onpage change
   * @param page show the page
   */
  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedTeamData = this.teamMembers.slice(this.startIndex, this.endIndex);
  }
  /**
   * fetches the members value
   */
  private _fetchData() {
    // Team Data
    this.teamMembers = teamData;

    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedTeamData = this.teamMembers.slice(this.startIndex, this.endIndex);
    this.totalSize = this.teamMembers.length;
  }
}

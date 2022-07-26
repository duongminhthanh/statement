import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Companies } from './companies.model';

import { companiesData, companyChart } from './data';

/**
 * Companies component - handling the companies with sidebar and content
 */
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})

export class CompaniesComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  // companies data
  companiesData: Companies[];

  // form submition
  submitted: boolean;

  // validation form
  validationform: FormGroup;

  // chart data
  companyChart: {};

  constructor(private modalService: NgbModal, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Companies', path: '/', active: true }];

    /**
     * Model data validation
     */
    this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      about: ['', [Validators.required]],
    });

    /**
     * Fetches data
     */
    this._fetchdata();
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Modal Open for adding new company data
   * @param content modal content
   */
  openModal(content: string) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Modal data save
   */
  saveData() {

    if (this.validationform.valid) {
      const name = this.validationform.get('name').value;
      const location = this.validationform.get('location').value;
      const about = this.validationform.get('about').value;

      // Companies data added
      this.companiesData.push({
        logo: 'assets/images/companies/apple.png',
        name,
        about,
        location
      });
      // Model value reset
      this.validationform = this.formBuilder.group({
        name: '',
        location: '',
        about: '',
      });
      this.modalService.dismissAll();
    }
    this.submitted = true;
  }

  /**
   * Fetches Companies data
   */
  private _fetchdata() {

    // companies data
    this.companiesData = companiesData;

    // companies chart
    this.companyChart = companyChart;
  }
}

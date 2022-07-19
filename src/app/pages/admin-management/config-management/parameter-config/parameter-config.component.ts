import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-config',
  templateUrl: './parameter-config.component.html',
  styleUrls: ['./parameter-config.component.scss']
})
export class ParameterConfigComponent implements OnInit {

  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page', path: '/' }, 
    { label: 'Administration', path: '/' }, 
    { label: 'Config Management', path: '/' },
    { label: 'Parameter Config', path: '/', active: true }];
  }

}

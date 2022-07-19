import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Cards, Widgets, WidgetUser, WidgetIcon, Chat, Todo, Inbox, ChartType } from './widgets.model';

import {
  cardData, widgetIcon, widgetuser, widget, revenueAreaChart, revenueBarChart, revenuePieChart, customerChart, orderChart, averageChart,
  revenueChart, revenueLineChart, revenueLineColumnChart, revenueRealTimeChart, inboxData, chatdata, todoData, getNewRealTimeSeries
} from './data';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})

/**
 * Widgets component - handling the widgets with sidebar and content
 */
export class WidgetsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // widget data
  cardData: Cards[];
  widgetIcon: Widgets[];
  widgetuser: WidgetUser[];
  widget: WidgetIcon[];

  inboxData: Inbox[];
  chatdata: Chat[];
  todoData: Todo[];

  filteredData;

  // Widget charts
  customerChart: ChartType;
  orderChart: ChartType;
  averageChart: ChartType;
  revenueChart: ChartType;

  revenueAreaChart: ChartType;
  revenueBarChart: ChartType;
  revenuePieChart: ChartType;
  revenueLineChart: ChartType;

  revenueRealTimeChart: ChartType;
  revenueLineColumnChart: ChartType;

  // Validation form
  formData: FormGroup;
  formTodoData: FormGroup;

  // Form submit
  chatSubmit: boolean;
  todoSubmit: boolean;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Widgets', path: '/', active: true }];

    /**
     * Input Chat Validation
     */
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    /**
     * Todo Input Validation
     */
    this.formTodoData = this.formBuilder.group({
      text: ['', [Validators.required]],
    });

    /**
     * Fetches Data
     */
    this._fetchData();

    this.chatSubmit = false;
    this.todoSubmit = false;
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Returns form
   */
  get form1() {
    return this.formTodoData.controls;
  }

  /**
   * fetches the widget data
   */
  private _fetchData() {

    // Fetch Widget icon Data
    this.widgetIcon = widgetIcon;
    // Fetch Widget user data
    this.widgetuser = widgetuser;
    // Fetch widget data
    this.widget = widget;
    this.cardData = cardData;
    // Revenue Area Chart
    this.revenueAreaChart = revenueAreaChart;
    // Revenue var Chart
    this.revenueBarChart = revenueBarChart;
    // Revenue Pie chart
    this.revenuePieChart = revenuePieChart;

    // Widget Charts
    this.customerChart = customerChart;
    this.orderChart = orderChart;
    this.averageChart = averageChart;
    this.revenueChart = revenueChart;

    // Revenue Line Chart
    this.revenueLineChart = revenueLineChart;
    // Revenue Mixed Chart
    this.revenueLineColumnChart = revenueLineColumnChart;
    // Revenue realtime chart
    this.revenueRealTimeChart = revenueRealTimeChart;

    window.setInterval(() => {
      // tslint:disable-next-line: no-string-literal
      this.revenueRealTimeChart['series'] = [
        {
          name: 'Data',
          data: getNewRealTimeSeries({
            min: 10,
            max: 90
          })
        }
      ];
    }, 1000);

    // Inbox Data
    this.inboxData = inboxData;
    // Chat Data
    this.chatdata = chatdata;
    // Todo Data
    this.todoData = todoData;
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    if (this.formData.valid) {
      const message = this.formData.get('message').value;
      const currentDate = new Date();

      // Message Push in Chat
      this.chatdata.push({
        name: 'Smith',
        image: 'assets/images/users/avatar-5.jpg',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      });

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: ''
      });
    }

    this.chatSubmit = true;
  }

  /**
   * Returns the completed todos
   */
  get completedTodo() {
    return this.todoData.filter(t => t.done === false);
  }

  /**
   * Save the todo data in Todo
   */
  saveTodo() {
    const id = this.todoData.filter(i => i.id).map(i => i.id);
    if (this.formTodoData.valid) {
      const text = this.formTodoData.get('text').value;
      this.todoData.push({
        id: id.length + 1,
        text,
        done: true
      });

      // Set Form Data Reset
      this.formTodoData = this.formBuilder.group({
        text: ''
      });
    }

    this.todoSubmit = true;
  }

  /**
   * Set Checkbox Status
   * @param index checkbox index
   */
  changeStatus(index) {
    this.todoData[index].done = !this.todoData[index].done;
  }

  /**
   * checked todo data hide
   */
  archiveTodo() {
    this.todoData = this.todoData.filter(x => x.done === false);
  }
}

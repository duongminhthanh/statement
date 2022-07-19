import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TaskSchedulerComponent } from "./task-scheduler.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TaskSchedulerComponent", () => {

  let fixture: ComponentFixture<TaskSchedulerComponent>;
  let component: TaskSchedulerComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TaskSchedulerComponent]
    });

    fixture = TestBed.createComponent(TaskSchedulerComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

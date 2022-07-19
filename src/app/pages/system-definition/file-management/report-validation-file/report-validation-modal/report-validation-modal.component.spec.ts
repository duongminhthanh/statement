import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ReportValidationModalComponent } from "./report-validation-modal.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ReportValidationModalComponent", () => {

  let fixture: ComponentFixture<ReportValidationModalComponent>;
  let component: ReportValidationModalComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ReportValidationModalComponent]
    });

    fixture = TestBed.createComponent(ReportValidationModalComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ReportValidationFileComponent } from "./report-validation-file.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ReportValidationFileComponent", () => {

  let fixture: ComponentFixture<ReportValidationFileComponent>;
  let component: ReportValidationFileComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ReportValidationFileComponent]
    });

    fixture = TestBed.createComponent(ReportValidationFileComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

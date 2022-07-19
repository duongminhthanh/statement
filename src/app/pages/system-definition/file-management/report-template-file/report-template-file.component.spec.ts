import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ReportTemplateFileComponent } from "./report-template-file.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ReportTemplateFileComponent", () => {

  let fixture: ComponentFixture<ReportTemplateFileComponent>;
  let component: ReportTemplateFileComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ReportTemplateFileComponent]
    });

    fixture = TestBed.createComponent(ReportTemplateFileComponent);
    component = fixture.componentInstance;
  });
  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

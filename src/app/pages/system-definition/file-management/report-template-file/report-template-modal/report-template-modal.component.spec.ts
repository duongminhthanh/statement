import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ReportTemplateModalComponent } from "./report-template-modal.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ReportTemplateModalComponent", () => {

  let fixture: ComponentFixture<ReportTemplateModalComponent>;
  let component: ReportTemplateModalComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ReportTemplateModalComponent]
    });

    fixture = TestBed.createComponent(ReportTemplateModalComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

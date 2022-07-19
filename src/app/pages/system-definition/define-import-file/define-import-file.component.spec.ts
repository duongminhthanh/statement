import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DefineImportFileComponent } from "./define-import-file.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DefineImportFileComponent", () => {

  let fixture: ComponentFixture<DefineImportFileComponent>;
  let component: DefineImportFileComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DefineImportFileComponent]
    });

    fixture = TestBed.createComponent(DefineImportFileComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

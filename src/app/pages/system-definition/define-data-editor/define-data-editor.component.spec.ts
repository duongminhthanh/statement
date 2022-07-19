import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DefineDataEditorComponent } from "./define-data-editor.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DefineDataEditorComponent", () => {

  let fixture: ComponentFixture<DefineDataEditorComponent>;
  let component: DefineDataEditorComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DefineDataEditorComponent]
    });

    fixture = TestBed.createComponent(DefineDataEditorComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

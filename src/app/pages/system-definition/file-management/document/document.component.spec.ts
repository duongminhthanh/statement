import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DocumentComponent } from "./document.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DocumentComponent", () => {

  let fixture: ComponentFixture<DocumentComponent>;
  let component: DocumentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DocumentComponent]
    });

    fixture = TestBed.createComponent(DocumentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

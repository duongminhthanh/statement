import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DocumentModalComponent } from "./document-modal.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DocumentModalComponent", () => {

  let fixture: ComponentFixture<DocumentModalComponent>;
  let component: DocumentModalComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DocumentModalComponent]
    });

    fixture = TestBed.createComponent(DocumentModalComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

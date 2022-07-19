import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DefineBatchProcessComponent } from "./define-batch-process.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DefineBatchProcessComponent", () => {

  let fixture: ComponentFixture<DefineBatchProcessComponent>;
  let component: DefineBatchProcessComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DefineBatchProcessComponent]
    });

    fixture = TestBed.createComponent(DefineBatchProcessComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ValidationComponent } from "./validation.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ValidationComponent", () => {

  let fixture: ComponentFixture<ValidationComponent>;
  let component: ValidationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ValidationComponent]
    });

    fixture = TestBed.createComponent(ValidationComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

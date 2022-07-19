import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FomartFileComponent } from "./fomart-file.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FomartFileComponent", () => {

  let fixture: ComponentFixture<FomartFileComponent>;
  let component: FomartFileComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FomartFileComponent]
    });

    fixture = TestBed.createComponent(FomartFileComponent);
    component = fixture.componentInstance;
  });
  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

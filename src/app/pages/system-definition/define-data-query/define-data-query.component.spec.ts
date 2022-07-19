import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DefineDataQueryComponent } from "./define-data-query.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DefineDataQueryComponent", () => {

  let fixture: ComponentFixture<DefineDataQueryComponent>;
  let component: DefineDataQueryComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DefineDataQueryComponent]
    });

    fixture = TestBed.createComponent(DefineDataQueryComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

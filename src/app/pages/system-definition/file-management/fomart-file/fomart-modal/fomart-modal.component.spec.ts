import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FomartModalComponent } from "./fomart-modal.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FomartModalComponent", () => {

  let fixture: ComponentFixture<FomartModalComponent>;
  let component: FomartModalComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FomartModalComponent]
    });

    fixture = TestBed.createComponent(FomartModalComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

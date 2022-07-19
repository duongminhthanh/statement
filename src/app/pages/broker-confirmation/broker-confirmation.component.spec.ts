import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BrokerConfirmationComponent } from "./broker-confirmation.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BrokerConfirmationComponent", () => {

  let fixture: ComponentFixture<BrokerConfirmationComponent>;
  let component: BrokerConfirmationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BrokerConfirmationComponent]
    });

    fixture = TestBed.createComponent(BrokerConfirmationComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

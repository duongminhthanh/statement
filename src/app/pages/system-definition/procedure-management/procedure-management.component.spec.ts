import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProcedureManagementComponent } from "./procedure-management.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProcedureManagementComponent", () => {

  let fixture: ComponentFixture<ProcedureManagementComponent>;
  let component: ProcedureManagementComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProcedureManagementComponent]
    });

    fixture = TestBed.createComponent(ProcedureManagementComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

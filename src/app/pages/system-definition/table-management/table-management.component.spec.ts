import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TableManagementComponent } from "./table-management.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TableManagementComponent", () => {

  let fixture: ComponentFixture<TableManagementComponent>;
  let component: TableManagementComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TableManagementComponent]
    });

    fixture = TestBed.createComponent(TableManagementComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

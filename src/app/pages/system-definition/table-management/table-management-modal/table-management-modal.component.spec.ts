import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TableManagementModalComponent } from "./table-management-modal.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TableManagementModalComponent", () => {

  let fixture: ComponentFixture<TableManagementModalComponent>;
  let component: TableManagementModalComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TableManagementModalComponent]
    });

    fixture = TestBed.createComponent(TableManagementModalComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

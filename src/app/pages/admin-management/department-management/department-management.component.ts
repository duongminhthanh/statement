import { UnitService } from 'src/app/core/services/module/unit.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DepartmentService } from 'src/app/core/services/module/department.service';
import Swal from 'sweetalert2';
import { DepartmentModalComponent } from './department-modal/department-modal.component';
import {ExcelService} from '../../../core/services/ExcelService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { parseDataUpload } from 'src/app/shared/utils/upload.util';
import { createFileType, downLoadFile } from 'src/app/shared/utils/export.util';
import { FILE_TYPE } from 'src/app/shared/utils/app.util';

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.scss']
})
export class DepartmentManagementComponent implements OnInit {
  @ViewChild('departmentFileImport', {static: false}) departmentFileImport: ElementRef;

  ngUnsubscribe = new Subject<void>();

  breadCrumbItems: Array<{}>;
  isCollapsed = true;
  departmentList: Array<any> = [];
  fileType = FILE_TYPE;


  // Param
  departmentCode:string;
  departmentName:string;
  statusList = [
    {value: '1', name: 'Hoạt động', nameEn: 'Actice'},
    {value: '0', name: 'Không hoạt động', nameEn: 'Inactive'},
  ];
  unitList:Array<any> = [];

  loading = false;
  pageNumber = 1;
  pageSize = 5;
  maxSize = 5;
  totalRecord = 0;
  searchDepartmentForm: FormGroup;


  constructor(
    private departmentService: DepartmentService,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private excelService: ExcelService,
    private unitService : UnitService,
    private formBuilder: FormBuilder,
    
  ) {

  }
  get fSearch() {
    return this.searchDepartmentForm.controls;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page', path: '/' },
    { label: 'Administration', path: '/' },
    { label: 'Department Management', path: '/', active: true }];

   // this.getDepartmentList();
    this.initFormSearch();
    this.search();
    this.getDataCbb();
  }
  initFormSearch() {
    this.searchDepartmentForm = this.formBuilder.group({
      code: [''],
      name: [''],
      status: [-1],
      unit: ['']
    });
    this.getDepartmentList();
  }

  getDepartmentList() {
    const json = {
      code: this.fSearch.code.value,
      name: this.fSearch.name.value,
      status:  this.fSearch.status.value,
      unit: this.fSearch.unit.value,
      page: this.pageNumber,
      limit: this.pageSize,
    };
    this.loading = true;
    this.departmentService.getDepartmentList(json).subscribe(res => {
      if (res) {
        this.departmentList = res.data;
        this.totalRecord = res.totalRecord;
      }
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  
  getDataCbb() {
    this.unitService.getUnitList({page: 1, limit: 1000, status: -1}).subscribe(res => {
        if (res) {
            this.unitList = res.data;
            this.unitList.unshift({name:  'Tất cả',code: ''});
                     

        }
    });
    
}

  search() {
    this.pageNumber = 1;
    this.pageSize = 5;
    this.getDepartmentList();
  }

  onPageChange(page: any) {
    this.pageSize = page.pageSize;
    this.pageNumber = page.pageIndex + 1;
    this.getDepartmentList();
  }

  deletedDepartment(item: any) {
    Swal.fire({
      // tslint:disable-next-line: max-line-length
      title: 'Dữ liệu bị xóa sẽ không thể khôi phục!',
      html: 'Xác nhận phòng ban này?',
      type: 'question',
      imageHeight: 150,
      imageWidth: 320,
      imageClass: 'img-responsive',
      animation: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Đóng',
    }).then((result) => {
      if (result.value) {
        const json = {id: item.id};
        this.loading = true;
        this.departmentService.deleteDepartment(json).pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
          if (res && res.errorCode === '0') {
            this.toastService.success('Xóa phòng ban thành công', 'Thông báo');
            this.getDepartmentList();
          } else {

          }
          this.loading = false;

        }, err => {
          this.loading = false;
        });

      }
    });
  }

 

  openCreateModal(item: any) {
    const modalRef = this.modalService.open(DepartmentModalComponent, { centered: true, size: 'lg', scrollable: true });
    if (item) {
      modalRef.componentInstance.item = item;
    }
    modalRef.componentInstance.title = item ? 'Edit' : 'Create';
    modalRef.componentInstance.unitList = this.unitList;

    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.search();
      this.modalService.dismissAll();
    });
  }

  // exportAsXLSX() {
  //   this.excelService.exportAsExcelFile(this.departmentList, 'department  _list_' + new Date().toDateString());
  // }


  onFileSelect(e: any) {
    if (e.target.files ? e.target.files.length > 0 : false) {
        this.departmentService.importDepartment(
            parseDataUpload(e.target.files[0],null))
            .subscribe(data => {
                if ( data? data.errorCode === '0': false ) {
                    this.toastService.success('Import dữ liệu thành công');
                    this.search();
                    this.departmentFileImport.nativeElement.value = ''; // reset value file choose
                } else {
                    this.toastService.error(data.errorDesc, 'Thông báo');
                    this.departmentFileImport.nativeElement.value = ''; // reset value file choose
                }
            });
    }

 }
 
 DowloadListDepartment(fileType: any) {
  const json = {
    fileType,
    f: this.departmentList,
  };
  this.departmentService.exportListDepartment(json).subscribe(res => {
    if (res) {
      downLoadFile(
          res,
          createFileType(fileType), 'list_Department_' + new Date().toDateString()
      );
    }
  });

}
}

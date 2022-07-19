import { UnitModalComponent } from './unit-modal/unit-modal.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UnitService } from 'src/app/core/services/module/unit.service';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup} from '@angular/forms';
import {createFileType, downLoadFile} from '../../../shared/utils/export.util';
import { parseDataUpload } from 'src/app/shared/utils/upload.util';
import {FILE_TYPE} from '../../../shared/utils/app.util';

@Component({
  selector: 'app-unit-management',
  templateUrl: './unit-management.component.html',
  styleUrls: ['./unit-management.component.scss']
})
export class UnitManagementComponent implements OnInit {
  @ViewChild('unitFileImport', {static: false}) unitFileImport: ElementRef;

  ngUnsubscribe = new Subject<void>();
  isCollapsed = true;

  breadCrumbItems: Array<{}>;
  loading = false;
  pageNumber = 1;
  pageSize = 5;
  maxSize = 5;
  totalRecord = 0;
  unitList: Array<any> = [];

  fileType = FILE_TYPE;

  // Param
  unitCode:string;
  unitName:string;
  statusList = [
    {value: '1', name: 'Hoạt động', nameEn: 'Actice'},
    {value: '0', name: 'Không hoạt động', nameEn: 'Inactive'},
  ];
  
  searchUnitForm: FormGroup;
  isSubmit:  boolean;
 

  constructor(
      private modalService: NgbModal,
      private unitService: UnitService,
      private toast: ToastrService,
      private formBuilder: FormBuilder,
  ) { }

  get fSearch() {
    return this.searchUnitForm.controls;
  }
  


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page', path: '/' },
      { label: 'Administration', path: '/' },
      { label: 'Unit Management', path: '/', active: true }];
      this.initFormSearch();
      this.search();
  }

  initFormSearch() {
    this.searchUnitForm = this.formBuilder.group({
      code: [''],
      name: [''],
      status: [-1]
    });
    this.getUnitList();
  }

  openCreateModal(item: any) {
    const modalRef = this.modalService.open(UnitModalComponent, { centered: true, size: 'lg', scrollable: true });
    if (item) {
      modalRef.componentInstance.item = item;
    }
    modalRef.componentInstance.title = item ? 'Edit' : 'Create';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.modalService.dismissAll();
      this.getUnitList();
    });
  }

  getUnitList() {
    const json = {
      code: this.fSearch.code.value,
      name:  this.fSearch.name.value,
      status:  this.fSearch.status.value,
      page: this.pageNumber,
      limit: this.pageSize,
    };
    this.loading = true;
    this.unitService.getUnitList(json).subscribe(res => {
      if (res) {
        this.unitList = res.data;
        this.totalRecord = res.totalRecord;
      }
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  search() {
    this.pageNumber = 1;
    this.pageSize = 5;
    this.getUnitList();

  }
 

  onPageChange(page: any) {
    this.pageSize = page.pageSize;
    this.pageNumber = page.pageIndex + 1;
    this.getUnitList();
  }

  deletedUnit(item: any) {
    Swal.fire({
      // tslint:disable-next-line: max-line-length
      title: 'Dữ liệu bị xóa sẽ không thể khôi phục!',
      html: 'Xác nhận nhóm này?',
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
        this.unitService.deleteUnit(json).pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
          if (res && res.errorCode === '0') {
            this.toast.success('Xóa đơn vị thành công', 'Thông báo');
            this.getUnitList();
          } else {

          }
          this.loading = false;

        }, err => {
          this.loading = false;
        });

      }
    });
  }
  // exportAsXLSX() {
  //   this.excelService.exportAsExcelFile(this.unitList, 'unit_list_' + new Date().toDateString());
  // }

  DowloadListUnit(fileType: any) {
    const json = {
      fileType,
      f: this.unitList,
    };
    this.unitService.exportListUnit(json).subscribe(res => {
      if (res) {
        downLoadFile(
            res,
            createFileType(fileType), 'list_Unit_' + new Date().toDateString()
        );
      }
    });

  }
  onFileSelect(e: any) {
    if (e.target.files ? e.target.files.length > 0 : false) {
        this.unitService.importUnits(
            parseDataUpload(e.target.files[0],null))
            .subscribe(data => {
                if ( data? data.errorCode === '0': false ) {
                    this.toast.success('Import dữ liệu thành công');
                    this.search();
                    this.unitFileImport.nativeElement.value = ''; // reset value file choose
                } else {
                    this.toast.error(data.errorDesc, 'Thông báo');
                    this.unitFileImport.nativeElement.value = ''; // reset value file choose
                }
            });
    }

 }

}




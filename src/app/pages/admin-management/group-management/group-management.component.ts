import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GroupService } from 'src/app/core/services/module/group.service';
import Swal from 'sweetalert2';
import { GroupModalComponent } from './group-modal/group-modal.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {

  ngUnsubscribe = new Subject<void>();
  isCollapsed = true;

  breadCrumbItems: Array<{}>;
  loading = false;
  pageNumber = 1;
  pageSize = 5;
  maxSize = 5;
  totalRecord = 0;
  groupList: Array<any> = [];

  // Param
  groupCode: string;
  groupName: string;
  status: any;
  statusList = [
    {value: '1', name: 'Hoạt động', nameEn: 'Actice'},
    {value: '0', name: 'Không hoạt động', nameEn: 'Inactive'},
  ];
  searchGroupForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    private groupService: GroupService,
    private toastService: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  get fSearch() {
    return this.searchGroupForm.controls;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page', path: '/' },
    { label: 'Administration', path: '/' },
    { label: 'Group Management', path: '/', active: true }];

    this.initFormSearch();

    this.search();
  }

  initFormSearch() {
    this.searchGroupForm = this.formBuilder.group({
      code: [''],
      name: [''],
      status: [-1]
    });
  }

  openCreateModal(item: any) {
    const modalRef = this.modalService.open(GroupModalComponent, { centered: true, size: 'lg', scrollable: true });
    if (item) {
      modalRef.componentInstance.item = item;
    }
    modalRef.componentInstance.title = item ? 'Edit' : 'Create';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.modalService.dismissAll();
      this.getGroupList();
    });
  }

  getGroupList() {
    const json = {
      code: this.fSearch.code.value,
      name:  this.fSearch.name.value,
      status:  this.fSearch.status.value,
      page: this.pageNumber,
      limit: this.pageSize,
    };
    this.loading = true;
    this.groupService.getGroupList(json).subscribe(res => {
      if(res) {
        this.groupList = res.data;
        this.totalRecord = res.totalRecord;
      }
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }

  search() {
    this.pageNumber = 1;
    this.pageSize = 5;
    this.getGroupList();
  }

  onPageChange(page: any) {
    this.pageSize = page.pageSize;
    this.pageNumber = page.pageIndex + 1;
    this.getGroupList();
  }

  deletedGroup(item: any) {
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
        this.groupService.deleteGroup(json).pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
          if(res && res.errorCode == '0') {
            this.toastService.success('Xóa nhóm thành công', 'Thông báo');
              this.getGroupList();
          } else {

          }
          this.loading = false;

        }, err => {
          this.loading = false;
        })

      }
    });
  }

}

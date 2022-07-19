import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserService} from 'src/app/core/services/module/user.service';
import Swal from 'sweetalert2';
import {UserModalComponent} from './user-modal/user-modal.component';
import {DepartmentService} from '../../../core/services/module/department.service';
import {GroupService} from '../../../core/services/module/group.service';
import { UnitService } from 'src/app/core/services/module/unit.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FILE_TYPE} from '../../../shared/utils/app.util';
import {parseDataUpload} from '../../../shared/utils/upload.util';
import {AuthenticationService} from '../../../core/services/auth/auth.service';
import {ToastrService} from 'ngx-toastr';
import {ExcelService} from '../../../core/services/ExcelService';

@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
    @ViewChild('userFileImport', {static: false}) userFileImport: ElementRef;

    searchUserForm: FormGroup;
    ngUnsubscribe = new Subject<void>();

    breadCrumbItems: Array<{}>;
    isCollapsed = true;
    fileType = FILE_TYPE;

    // Param
    statusList = [
        {value: '1', name: 'Hoạt động', nameEn: 'Actice'},
        {value: '0', name: 'Không hoạt động', nameEn: 'Inactive'},
    ];

    loading = false;
    pageNumber = 1;
    pageSize = 5;
    maxSize = 5;
    totalRecord = 0;
    userList: Array<any> = [];
    departmentList: Array<any> = [];
    groupList: Array<any> = [];
    unitList: Array<any> = [];



    constructor(
        private userSerivice: UserService,
        private modalService: NgbModal,
        private departmentService: DepartmentService,
        private groupSevice: GroupService,
        private unitService:UnitService,
        private formBuilder: FormBuilder,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private excelService: ExcelService,
    ) {
    }

    get fSearch() {
        return this.searchUserForm.controls;
    }

    ngOnInit() {
        this.breadCrumbItems = [{label: 'Home page', path: '/'},
            {label: 'Administration', path: '/'},
            {label: 'User Management', path: '/', active: true}];

        this.initFormSearch();

        this.search();
        this.getDataCbb();
    }

    initFormSearch() {
        this.searchUserForm = this.formBuilder.group({
            userCode: [''],
            userName: [''],
            groupCode: [''],
            departmentCode: [''],
            unitCode:[''],
            status: [-1]
        });
        this.getUserList();
    }

    getUserList() {
        const json = {
            userCode: this.fSearch.userCode.value,
            userName: this.fSearch.userName.value,
            groupCode: this.fSearch.groupCode.value,
            departmentCode: this.fSearch.departmentCode.value,
            unitCode:this.fSearch.unitCode.value,
            status: this.fSearch.status.value,
            page: this.pageNumber,
            limit: this.pageSize,
        };
        this.loading = true;
        this.userSerivice.getUserList(json).subscribe(res => {
            if (res) {
                this.userList = res.data;
                this.totalRecord = res.totalRecord;
            }
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }

    search() {
        this.pageNumber = 1;
        this.pageSize = 10;
        this.getUserList();
    }

    onPageChange(page: any) {
        this.pageSize = page.pageSize;
        this.pageNumber = page.pageIndex + 1;
        this.getUserList();
    }

    deletedUser(item: any) {
        Swal.fire({
            // tslint:disable-next-line: max-line-length
            title: 'Dữ liệu bị xóa sẽ không thể khôi phục!',
            html: 'Xác nhận xóa người dùng này?',
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
                this.userSerivice.deleteUser(json).pipe(takeUntil(this.ngUnsubscribe)).subscribe(res => {
                    if (res && res.errorCode === '0') {
                        this.toastr.success('Xóa người dùng thành công');
                        this.search();
                    } else {
                        this.toastr.error(res.errorDesc, 'Thông báo');
                    }
                    this.loading = false;

                }, err => {
                    this.loading = false;
                });

            }
        });
    }

    openCreateModal(item: any) {
        const modalRef = this.modalService.open(UserModalComponent, {centered: true, size: 'lg'});
        if (item) {
            modalRef.componentInstance.item = item;
        }
        modalRef.componentInstance.title = item ? 'Edit' : 'Create';
        modalRef.componentInstance.departmentList = this.departmentList;
        modalRef.componentInstance.groupList = this.groupList;
        modalRef.componentInstance.unitList = this.unitList;
        modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
            this.search();
            this.modalService.dismissAll();
        });
    }
   

    getDataCbb() {
        this.departmentService.getDepartmentList({page: 1, limit: 1000, status: -1}).subscribe(res => {
            if (res) {
                this.departmentList = res.data;
                this.departmentList.unshift({name: 'Tất cả', code: ''});
            }
        });
        this.groupSevice.getGroupList({page: 1, limit: 1000, status: -1}).subscribe(res => {
            if (res) {
                this.groupList = res.data;
                this.groupList.unshift({name: 'Tất cả', code: ''});
            }
        });
        this.unitService.getUnitList({page: 1, limit: 1000, status: -1}).subscribe(res => {
            if (res) {
                this.unitList = res.data;
                this.unitList.unshift({name: 'Tất cả', code: ''});
            }
        });
    }

    onFileSelect(e: any) {
        if (e.target.files ? e.target.files.length > 0 : false) {
            this.userSerivice.importUsers(
                parseDataUpload(e.target.files[0], {creater: this.authService.currentUser().code}))
                .subscribe(data => {
                    if (data ? data.errorCode === '0' : false) {
                        this.toastr.success('Import dữ liệu thành công');
                        this.search();
                        this.userFileImport.nativeElement.value = ''; // reset value file choose
                    } else {
                        this.toastr.error(data.errorDesc, 'Thông báo');
                        this.userFileImport.nativeElement.value = ''; // reset value file choose
                    }
                });
        }

    }

    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.userList, 'user_list_' + new Date().toDateString());
    }
}

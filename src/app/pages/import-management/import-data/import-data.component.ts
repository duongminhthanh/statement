import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { parseDataUpload } from '../../../shared/utils/upload.util';
import { FILE_TYPE } from '../../../shared/utils/app.util';
import { ImportManagementService } from '../../../core/services/module/import-management.service';
import { AuthenticationService } from '../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from '../../../core/services/ExcelService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { createFileType, downLoadFile } from '../../../shared/utils/export.util';
import { UserService } from '../../../core/services/module/user.service';
import { ModalsComponent } from '../../ui/modals/modals.component';

@Component({
    selector: 'app-import-data',
    templateUrl: './import-data.component.html',
    styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent implements OnInit {
    fileType = FILE_TYPE;
    @ViewChild('bankStatementFileImport', { static: false }) bankStatementFileImport: ElementRef;
    breadCrumbItems: Array<{}>;
    isCollapsed = true;

    searchFileListForm: FormGroup;
    loading = false;
    pageNumber = 1;
    pageSize = 5;
    maxSize = 5;
    totalRecord = 0;
    fileList: Array<any> = [];
    checked = null;
    objExport = {};
    userList = [];
    pdfSrc = null;
    file: any;
    fileSize: string;
    fileName: string;
    fileUpload: any;

    constructor(
        private importManagementService: ImportManagementService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private calendar: NgbCalendar,
        private modalService: NgbModal,
        private userService: UserService
    ) {
    }

    get fSearch() {
        return this.searchFileListForm.controls;
    }

    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Minton', path: '/' },
        { label: 'Import management', path: '/' }, { label: 'Import Data', path: '/', active: true }];
        this.initFormSearch();
        this.search();

        this.getListUsers();
    }

    initFormSearch() {
        this.searchFileListForm = this.formBuilder.group({
            fileType: [''],
            status: [''],
            transactionDate: [this.calendar.getToday()],
            searchKey: [''],
        });
    }

    getListUsers() {
        this.userService.getUserList({ page: 1, limit: 1000, status: -1 }).subscribe(res => {
            if (res) {
                this.userList = res.data;
            }
        });
    }

    search() {
        this.pageNumber = 1;
        this.pageSize = 10;
        this.getFileList();
    }

    getFileList() {
        const date = this.fSearch.transactionDate.value;
        const json = {
            fileType: this.fSearch.fileType.value,
            status: this.fSearch.status.value,
            transactionDate: new Date(date.year, date.month - 1, date.day),
            searchKey: this.fSearch.searchKey.value,
            page: this.pageNumber,
            limit: this.pageSize,
        };
        this.loading = true;
        this.importManagementService.getFileList(json).subscribe(res => {
            if (res) {
                this.fileList = res.data;
                this.totalRecord = res.totalRecord;
            }
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }

    onFileSelect(e: any) {
        if (e.target.files ? e.target.files.length > 0 : false) {
            this.importManagementService.importBankStatements(
                parseDataUpload(e.target.files[0], {
                    creater: this.authService.currentUser().code
                }))
                .subscribe(data => {
                    if (data ? data.errorCode === '0' : false) {
                        this.toastr.success('Import dữ liệu thành công');
                        this.search();
                        this.bankStatementFileImport.nativeElement.value = ''; // reset value file choose
                    } else {
                        this.toastr.error(data.errorDesc, 'Thông báo');
                        this.bankStatementFileImport.nativeElement.value = ''; // reset value file choose
                    }
                });
        }

    }

    exportAsXLSX(pdfDataModal) {
        this.loading = true;
        this.importManagementService.exportBankStatements(this.objExport).subscribe((data) => {
            this.loading = false;
            if (data) {
                const uint8View = new Uint8Array(data);
                this.pdfSrc = uint8View;
                // const base64String = btoa(String.fromCharCode(...uint8View));
                this.modalService.open(pdfDataModal, { scrollable: true, centered: true, size: 'xl' });
                // downLoadFile(data, createFileType('pdf'), 'Bank-Statement');
            }
        }, error => {this.toastr.error('Xuất file không thành công', 'Lỗi');this.loading = false;});
    }

    signiture() {
        this.loading = true;
        const formData: FormData = new FormData();
        formData.append('file', this.file);
        formData.append('info', new Blob([JSON.stringify(this.objExport)], {type: 'application/json'}));
        this.importManagementService.signBankStatements(formData).subscribe(data => {
            this.loading = false;
            if(data) {
                const type = 'application/pdf';
                const date = new Date();
                const blob = new Blob([data], {type});
                this.modalService.dismissAll();
                const a = document.createElement('a');
                a.href = window.URL.createObjectURL(blob);
                a.download = 'Signature.pdf';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
            }
        }, error => {this.toastr.error('Xuất file không thành công', 'Lỗi'); this.loading = false;});
    }

    appendExtension(name: string, type: string) {
        switch (type) {
            case 'application/pdf':
                return name.concat('.').concat('pdf');
            case 'application/vnd.ms-excel':
                return name.concat('.').concat('xls');
            case 'application/zip':
                return name.concat('.').concat('zip');
        }
    }

    parseTime(time, userFormat) {
        if (arguments.length === 0) {
            return null;
        }
        const format = userFormat || '{y}-{m}-{d} {h}:{i}:{s}';
        let date;
        if (typeof time === 'object') {
            date = time;
        } else {
            if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
                time = parseInt(time, 10);
            }
            if ((typeof time === 'number') && (time.toString().length === 10)) {
                time = time * 1000;
            }
            date = new Date(time);
        }
        const formatObj = {
            u: date.getFullYear().toString().substring(2), // get 2 last digits in year
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
        };
        return format.replace(/{([uymdhisa])+}/g, (result, key) => {
            let value = formatObj[key];
            // Note: getDay() returns 0 on Sunday
            if (key === 'a') {
                return ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][value];
            }
            if (result.length > 0 && value < 10) {
                value = '0' + value;
            }
            return value || 0;
        });
    }

    changeCheckList(i: number, e, item) {
        this.checked = e.target.checked ? i : null;
        this.objExport = item;
    }

    closePopup() {
        this.modalService.dismissAll();
    }

    openModalSign(modalId: any) {
        this.modalService.open(modalId, { centered: true, size: 'sm' });
    }

    uploadFile() {
        let file = (document.getElementById('upload') as HTMLInputElement).files[0];
        if (file == null) {
            this.fileSize = null;
            this.file = null;
            return;
        }
        this.fileName = file.name;
        this.fileSize = Math.round(file.size / 1024) + ' KB';
        if (this.fileSize !== null) {
            this.file = file;
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.fileUpload = e.target.result;
            };
            reader.readAsDataURL(this.file);
        }
    }
}

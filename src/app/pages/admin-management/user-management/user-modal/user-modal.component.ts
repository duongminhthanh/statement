import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {UserService} from 'src/app/core/services/module/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {


    @Input() title: any;
    @Input() item: any;

    @Output() passEntry: EventEmitter<any> = new EventEmitter();

    ngUnsubscribe = new Subject<void>();

    @Input() departmentList: Array<any> = [];
    @Input() groupList: Array<any> = [];
    @Input() unitList: Array<any> = [];


    form: FormGroup;
    isSubmit: boolean;
    loading: boolean = false;
    newitem: any;
    userCodeHasUse = null;

    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private toastService: ToastrService
    ) {
    }

    get f() {
        return this.form.controls;
    }

    ngOnInit() {
        this.initForm();
        if (this.item) {
            this.newitem = this.item;
            const date = new Date(this.item.birthday);
            this.newitem.birthday = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
            this.form.patchValue(this.newitem);
        }
    }

    initForm() {
        this.form = this.formBuilder.group({
            id: [null],
            code: [null, [Validators.required]],
            fullName: [null, [Validators.required]],
            birthday: [new NgbDate(1990, 1, 1), [Validators.required]],
            email: [null, [Validators.required]],
            phoneNo: [null, [Validators.required]],
            groupCode: [null, [Validators.required]],
            departmentCode: [null, [Validators.required]],
            unitCode: [null, [Validators.required]],
            creater: [null],
            createdDate: [null],
            editer: [null],
            editedDate: [null],
            status: [true]
        });
    }

    submit() {
        this.isSubmit = true;
        if (this.form.invalid) {
            // console.log('Lỗi form', this.form.value);
            this.toastService.error( 'You must fill all required values','');
            return;
        }

        const formValue = this.form.value;
        formValue.birthday = new Date(this.f.birthday.value.year, this.f.birthday.value.month - 1, this.f.birthday.value.day);
        console.log('formValue', formValue)
        if (this.item) {
            this.update(formValue);
        } else {
            this.create(formValue);
        }

    }

    create(formValue) {
        this.loading = true;
        this.userCodeHasUse = false;
        this.userService.createUser(formValue).subscribe(res => {
            if (res.errorCode === '0') {
                this.toastService.success('Created success', '');
                this.passEntry.emit(res);
                this.reset();
            } else if (res.errorCode === '-1') {
                const fieldError = res.errorDesc.split(' ')[0];
                if (fieldError === 'Invalid') {
                    this.userCodeHasUse = 'Email';

                } else {
                    this.userCodeHasUse = fieldError;
                }
                this.toastService.error('Invalid email format');
            }
            else if (res.errorCode === '-2') {
                const fieldError = res.errorDesc.split(' ')[0];
                if (fieldError === 'Used') {
                    this.userCodeHasUse = 'UserCode';

                } else {
                    this.userCodeHasUse = fieldError;
                }
                this.toastService.error('UserCode already in use');
            }
            else if (res.errorCode === '-3') {
                const fieldError = res.errorDesc.split(' ')[0];
                if (fieldError === 'Used') {
                    this.userCodeHasUse = 'PhoneNo';

                } else {
                    this.userCodeHasUse = fieldError;
                }
                this.toastService.error('PhoneNo already in use');
            }
            else if (res.errorCode === '-4') {
                const fieldError = res.errorDesc.split(' ')[0];
                if (fieldError === 'Used') {
                    this.userCodeHasUse = 'Email';

                } else {
                    this.userCodeHasUse = fieldError;
                }
                this.toastService.error('Email already in use');
            }
            else if (res.errorCode === '-5') {
                const fieldError = res.errorDesc.split(' ')[0];
                if (fieldError === 'Long') {
                    this.userCodeHasUse = 'PhoneNo';

                } else {
                    this.userCodeHasUse = fieldError;
                }
                this.toastService.error('PhoneNo must lower or equal to 10');
                
            }
            else if (res.errorCode === '-6') {
                const fieldError = res.errorDesc.split(' ')[0];
                if (fieldError === 'Not number') {
                    this.userCodeHasUse = 'PhoneNo';

                } else {
                    this.userCodeHasUse = fieldError;
                }
                this.toastService.error('PhoneNo must be number');
                
            }
            else if (res.errorCode === '-7') {
                const fieldError = res.errorDesc.split(' ')[0];
                if (fieldError === 'Empty') {
                    this.userCodeHasUse = 'Name';

                } else {
                    this.userCodeHasUse = fieldError;
                }
                this.toastService.error('UserName already in use');
                
            }
           
             else {
                this.toastService.error('Create failed', '');
            }
            this.isSubmit = false;
            this.loading = false;
        }, error => {
            this.toastService.error('Create failed', '');
            this.isSubmit = false;
            this.loading = false;
        });
    }


    update(formValue) {
        this.loading = true;
        this.userService.updateUser(formValue).subscribe(res => {
            if (res.errorCode === '0') {
                this.toastService.success('Updated success', '');
                this.passEntry.emit(res);
                this.reset();
            }
            else if (res.errorCode === '-1') {
                const fieldError = res.errorDesc.split(' ')[0];
                if (fieldError === 'Used') {
                    this.userCodeHasUse = 'Name';

                } else {
                    this.userCodeHasUse = fieldError;
                }
                this.toastService.error('UserCode already in use');
                
            }
             else {
                this.toastService.error('Update failed', '');
            }
            this.isSubmit = false;
            this.loading = false;
        }, error => {
            this.toastService.error('Update failed', '');
            this.isSubmit = false;
            this.loading = false;
        });
    }

    reset() {
        this.isSubmit = false;
        this.form.reset();
        this.f.status.setValue(true);
    }

}

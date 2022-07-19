import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DepartmentService } from 'src/app/core/services/module/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.scss']
})
export class DepartmentModalComponent implements OnInit {

  @Input() title: any;
  @Input() item: any;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngUnsubscribe = new Subject<void>();
  @Input() unitList: Array<any> = [];


  form: FormGroup;
  isSubmit: boolean;
  loading: boolean;
  departmentCodeHasUse = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
    console.log(this.unitList);
    if(this.item) {
      this.form.patchValue(this.item)
    }
  }

  get f() {
    return this.form.controls;
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      code: [null ,[Validators.required]],
      name: [null, [Validators.required]],
      nameEn: [null, [Validators.required]],
      unit: [null,[Validators.required]],
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
    this.toastService.error('You must fill 4 values required', '');
    return;
    }

    if (this.item) {
      this.update();
    } else {
      this.create();
    }

  }

  create() {
    this.loading = true;
    this.departmentCodeHasUse = false;
    this.departmentService.createDepartment(this.form.value).subscribe(res => {
      if (res.errorCode == '0') {
        this.toastService.success('Created success', '');
        this.passEntry.emit(res);
        this.reset();
      } else if (res.errorCode == '-1') {
        this.departmentCodeHasUse = true;
        this.toastService.error('Department code already exists', '');
      } else {
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


  update() {
    this.loading = true;
    this.departmentService.updateDepartment(this.form.value).subscribe(res => {
      if (res.errorCode == '0') {
        this.toastService.success('Updated success', '');
        this.passEntry.emit(res);
        this.reset();
      }else if (res.errorCode == '-1') {
        this.departmentCodeHasUse = true;
        this.toastService.error('Department code already exists', '');
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

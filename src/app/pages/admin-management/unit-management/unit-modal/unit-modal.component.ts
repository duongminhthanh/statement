
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UnitService } from 'src/app/core/services/module/unit.service';

@Component({
  selector: 'app-unit-modal',
  templateUrl: './unit-modal.component.html',
  styleUrls: ['./unit-modal.component.scss']
})
export class UnitModalComponent implements OnInit {

  @Input() title: any;
  @Input() item: any;


  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngUnsubscribe = new Subject<void>();

  form: FormGroup;
  isSubmit:  boolean;
  loading: boolean;
  status: boolean;

  unitCodeHasUse = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private unitService: UnitService,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
    if(this.item) {
      this.status = this.item.status;
      this.form.patchValue(this.item)
    }
  }

  get f() {
    return this.form.controls
  }


  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      nameEn: [null, [Validators.required]],
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
    this.unitCodeHasUse = false;
    this.unitService.createUnit(this.form.value).subscribe(res => {
      if (res.errorCode == '0') {
        this.toastService.success('Created success', '');
        this.passEntry.emit(res);
        this.reset();
      } else if (res.errorCode == '-1') {
        this.unitCodeHasUse = true;
        this.toastService.error('Unit code already exists', '');
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
    this.unitService.updateUnit(this.form.value).subscribe(res => {
      if (res.errorCode == '0') {
        this.toastService.success('Updated success', '');
        this.passEntry.emit(res);
        this.reset();
      } else if (res.errorCode == '-1'){
        this.toastService.error('Unit code already exists', '');
      }else {
        this.toastService.error('Updated failed', '');
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
    this.f.status.setValue(true,this.form);
  }
}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { GroupService } from 'src/app/core/services/module/group.service';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss']
})
export class GroupModalComponent implements OnInit {

  @Input() title: any;
  @Input() item: any;


  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngUnsubscribe = new Subject<void>();

  form: FormGroup;
  isSubmit:  boolean;
  loading: boolean;
  status: boolean;

  groupCodeHasUse = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private groupService: GroupService,
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
    this.groupCodeHasUse = false;
    this.groupService.createGroup(this.form.value).subscribe(res => {
      if (res.errorCode == '0') {
        this.toastService.success('Created success', '');
        this.passEntry.emit(res);
        this.reset();
      } else if (res.errorCode == '-1') {
        this.groupCodeHasUse = true;
        this.toastService.error('Group code already exists', '');
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
    this.groupService.updateGroup(this.form.value).subscribe(res => {
      if (res.errorCode == '0') {
        this.toastService.success('Updated success', '');
        this.passEntry.emit(res);
        this.reset();
      } else {
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

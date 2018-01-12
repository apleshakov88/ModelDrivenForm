import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  resetForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  isFieldInvalid(field: string) {
    const fieldItem = this.resetForm.get(field);
    return fieldItem.invalid && (fieldItem.touched || fieldItem.dirty);
  }

  isFieldHasError(field: string, error: string = 'required') {
    const fieldItem = this.resetForm.get(field);
    console.log('>>> isFieldHasError', error, fieldItem.hasError(error));
    return this.isFieldInvalid(field) && fieldItem.hasError(error);
  }

  isFieldHasError2() {
    
  }

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.email]],
      phone: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      gender: [''],
      agreed: ['', [Validators.required]]
    });
  }

  ngAfterViewInit() {}

  onSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  onReset(e) {
    e.preventDefault();
    console.log('reset');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm!: FormGroup;

  constructor() {}
  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
    });
  }
  onSubmit(data: any) {
    // console.log(this.myReactiveForm.getRawValue());
    console.log(data);
  }
  get username() {
    return this.myReactiveForm.get('username');
  }
  get email() {
    return this.myReactiveForm.get('email');
  }
  get phoneNumber() {
    return this.myReactiveForm.get('phoneNumber');
  }
  get course() {
    return this.myReactiveForm.get('course');
  }
  get gender() {
    return this.myReactiveForm.get('gender');
  }
}

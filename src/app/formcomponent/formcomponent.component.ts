import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css'],
})
export class FormcomponentComponent {
  @ViewChild('myForm') myForm: NgForm | undefined;
  username = '';
  defaultcourse = 'angular';

  genders = [
    {
      id: '1',
      value: 'Male',
    },
    {
      id: '2',
      value: 'Female',
    },
  ];
  defaultgender = 'Male';
  submitted = false;
  formData = {
    username: '',
    email: '',
    number: '',
    course: '',
    gender: '',
  };

  onSubmit(form: NgForm) {
    console.log('Form submitted successfully!');
    console.log(this.myForm);
    this.submitted = true;
    this.formData.username = this.myForm?.value.userDetail.username;
    this.formData.email = this.myForm?.value.userDetail.email;
    this.formData.number = this.myForm?.value.userDetail.number;
    this.formData.course = this.myForm?.value.course;
    this.formData.gender = this.myForm?.value.gender;

    this.myForm?.reset();
  }
  setusername() {
    // this.myForm?.setValue({
    //   userDetail: {
    //     username: 'Sonu121',
    //     number: '1234567890',
    //     email: 'xyz@gmail.com',
    //   },
    //   course: 'vue',
    //   gender: 'Female',
    // });
    this.myForm?.form.patchValue({
      userDetail: {
        username: 'Sonu121',
        number: '1234567890',
        email: 'xyz@gmail.com',
      },
      course: 'react',
    });
  }
}

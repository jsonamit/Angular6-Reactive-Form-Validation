import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addForm: FormGroup;
  email: string;
  password: string;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  })

  constructor(private fb: FormBuilder){}

  onSubmit(){}

  get username(){
   return this.loginForm.controls['username']
  }
  get password(){
    return this.loginForm.controls['password']
   }
}

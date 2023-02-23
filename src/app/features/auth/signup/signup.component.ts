import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      displayName: new UntypedFormControl('', [Validators.minLength(3)]),
      email: new UntypedFormControl('', [Validators.email]),
      password: new UntypedFormControl('', [Validators.minLength(6)]),
    })
  }

  signUp() {
    console.log("In signUp");
    this.auth.users.push({id:this.auth.lastId+1,email:this.form.value.email,password:this.form.value.password,userId:this.form.value.displayName,token:''});
  }
}

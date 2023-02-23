import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';  
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent implements OnInit {
  
  form!: UntypedFormGroup;
  userId='';
  userToken=''
  users:any=this.auth.users
  
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log("signIn page");
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.email]),
      password: new UntypedFormControl('', [Validators.minLength(6)]),
    })
  }

  signIn() {
    this.users.map((k:any)=>{
      if(k.email==this.form.value.email && k.password==this.form.value.password){
        this.auth.userId=k.userId;
        this.auth.userToken=k.token;
        this.auth.isLoggedIn=true;
        this.router.navigate(['chat']);
      }
    })
    if(!this.auth.isLoggedIn){
      alert("Enter valid Details...")
    }
  }

}

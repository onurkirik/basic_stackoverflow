import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  _loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void { }

  get f(): { [key: string]: AbstractControl } {
    return this._loginForm.controls;
  }

  public loginAccount() {
    this._userService.getUser(this._loginForm.value.email!).subscribe((res) => {
      if (res.length == 0 || res[0].email !== this._loginForm.value.email || res[0].password !== this._loginForm.value.password) {
        this._snackBar.open('Üzgünüm, bir şeyler yanlış gitti', 'Ok');
      }
      if (res[0].email === this._loginForm.value.email && res[0].password === this._loginForm.value.password) {
        this._userService.user = res[0];
        localStorage.setItem('user', JSON.stringify(this._userService.user));
        this._router.navigateByUrl('/home');
      }
    })
  }

}

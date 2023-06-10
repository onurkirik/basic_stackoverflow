import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  _createUserForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) { }

  ngOnInit(): void { }

  get f(): { [key: string]: AbstractControl } {
    return this._createUserForm.controls;
  }

  public createAccount() {
    this._userService.createAccount(this._createUserForm.value).subscribe((res) => {
      console.log(res);
    });
  }

}

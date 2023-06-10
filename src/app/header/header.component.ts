import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(
    public _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }


  public logOut() {
    this._router.navigateByUrl('/login');
  }

}

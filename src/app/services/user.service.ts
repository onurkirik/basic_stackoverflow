import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  user: any;

  constructor(private _baseService: BaseService) { super(_baseService._httpClient) }

  public createAccount(userObj: any) {
    return this.postReq('/users', userObj);
  }

  public getUser(email: string) {
    return this.getReq('/users?email=' + email);
  }

}

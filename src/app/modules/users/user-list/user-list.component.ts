import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Iuser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchVal!: string;
  profilephoto: string | ArrayBuffer = '';
  userage!: number;
  userArr: Array<Iuser> = []

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getAllUsers()
      .subscribe((res: any) => {
        this.userArr = res;
      })

    this._userService.newUserSubjectAsObs$
      .subscribe((res: any) => {
        this.userArr.push(res)
      })
    this._userService.deleteUserSubjectAsObs$
      .subscribe(res => {
        this.userArr = this.userArr.filter(user => user.userid !== res)
      })

    this._userService.updateUserSubjectAsObs$
      .subscribe((updUser: any) => {
        let updateIndex = this.userArr.findIndex(user => user.userid === updUser.userid)
        this.userArr[updateIndex] = updUser;
      })
  }



  onUserEdit(editUserObj: Iuser) {
    this._userService.editUser(editUserObj)
  }

  onUserDelete(userid: string) {
    let conf = confirm('Are you Sure want to delete')
    if (conf) {
      this._userService.deleteUser(userid)
    }
  }

}

import { Component, OnInit } from '@angular/core';
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
    // console.log(this.profilephoto);
    this._userService.getAllUsers()
      .subscribe((res: any) => {
        // console.log(res.profilephoto);
        this.userArr = res;
        // console.log(this.userArr);
      })

    this._userService.newUserSubjectAsObs$
      .subscribe((res: any) => {
        this.userArr.push(res)
      })
  }



  onUserEdit(editUserObj: Iuser) {
    console.log(editUserObj);
    this._userService.editUser(editUserObj)
  }

}

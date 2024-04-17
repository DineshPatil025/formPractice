import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {


  userForm !: FormGroup;
  file!: File;
  // age!:any


  constructor(
    private _fb: FormBuilder,
    private _userService: UserService
  ) {

    this.createUserForm()
  }

  ngOnInit(): void {
  }


  createUserForm() {
    this.userForm = this._fb.group({

      email: [null, [Validators.required]],
      profilephoto: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      // userage: [null, [Validators.required]],

    })
  }

  onUserAdd() {
    if (this.userForm.valid) {
      let newUser = this.userForm.value;
      this.ageCalc(newUser.dob)
      this._userService.addNewUser(newUser)
    }
  }

  uploadImage(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      btoa(reader.result as string);
      this._userService.sendprofileP(reader.result)
      this.userForm.patchValue({
        profilephoto: reader.result
      })
    };
    reader.readAsDataURL(file);
  }

  ageCalc(date: Date) {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age);
    this.userForm.patchValue({
      userage: age
    })



  }
}

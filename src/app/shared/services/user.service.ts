import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private newUserSubject$ = new Subject()
  newUserSubjectAsObs$ = this.newUserSubject$.asObservable()

  private deleteUserSubject$ = new Subject()
  deleteUserSubjectAsObs$ = this.deleteUserSubject$.asObservable()

  private editUserSubject$ = new Subject()
  editUserSubjectAsObs$ = this.editUserSubject$.asObservable()
  
  private updateUserSubject$ = new Subject()
  updateUserSubjectAsObs$ = this.updateUserSubject$.asObservable()

  private profilephotoSubject$ = new Subject()
  profilephotoSubjectAsObs$ = this.profilephotoSubject$.asObservable()

  baseUrl: string = `${environment.baseUrl}`
  userUrl: string = `${this.baseUrl}/testusers.json`

  constructor(
    private _http: HttpClient

  ) { }

  getAllUsers(): Observable<any> {
    return this._http.get<any>(this.userUrl)
      .pipe(
        map(res => {
          let userArr = []
          for (const key in res) {

            userArr.push({ ...res[key], userid: key })
          }
          return userArr
        })
      )

  }


  addNewUser(newUser: Iuser) {
    this._http.post(this.userUrl, newUser).subscribe((res: any) => {

      this.newUserSubject$.next({ ...newUser, userid: res['name'] })

    });
  }


  editUser(editUserObj: Iuser) {

    this.editUserSubject$.next(editUserObj)
    // let editUrl = `${environment.baseUrl}testusers/${editUserObj.id}`

  }

  sendprofileP(pp: any) {
    this.profilephotoSubject$.next(pp)
  }

  deleteUser(userid: string) {
    let deleteUrl = `${this.baseUrl}/testusers/${userid}.json`
    this._http.delete(deleteUrl).subscribe(res => {
      this.deleteUserSubject$.next(userid)
    });
  }

  updateUser(updateid: string,updtdUser:Iuser) {
    let updateUrl = `${this.baseUrl}/testusers/${updateid}.json`
    this._http.patch(updateUrl,updtdUser).subscribe(res => {
      console.log(res);
      
      this.updateUserSubject$.next({...updtdUser,userid:updateid})
    });
  }

}

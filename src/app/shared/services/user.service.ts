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

  private profilephotoSubject$ = new Subject()
  profilephotoSubjectAsObs$ = this.profilephotoSubject$.asObservable()

  userUrl: string = `${environment.baseUrl}testusers.json`

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

    // let editUrl = `${environment.baseUrl}testusers/${editUserObj.id}`

  }
  
  sendprofileP(pp:any){
    this.profilephotoSubject$.next(pp)
  }

}

import { AfterContentChecked, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';
import { UserService } from './shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit, OnDestroy, AfterContentChecked {
  title = 'formPractice';

  isLoader !: boolean;

  profilepic!: string;

  prfileSub!: Subscription

  private loaderService = inject(LoaderService)

  constructor(private _userService: UserService) {
    // console.log("app comp loaded");

  }
  ngOnDestroy(): void {
    this.prfileSub.unsubscribe()
  }

  ngOnInit(): void {


    this.prfileSub = this._userService.profilephotoSubjectAsObs$.subscribe((res: any) => {
      this.profilepic = res;
    })
  }

  ngAfterContentChecked(): void {
    this.loaderService.loaderStateAsObs$.subscribe(res => {
      this.isLoader = res;
    })
  }



}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, User } from '@workspace/core-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  currUser: User;

  links  = [];

  constructor(private userService: UserService){};

  ngOnInit(){
    this.userService.getUserDetails()
      .subscribe(res => {
        this.currUser = res;
        this.userService.currUser = this.currUser;
        this.links.push({path: '/home', title: 'Home'});
        this.links.push({path: '/projects', title: 'Projects'});
        this.links.push({path: '/questions', title: 'Questions'});
        this.links.push({path: '/quiz', title: 'Quiz'});
        this.links.push({path: '/exam', title: 'Exam'});
      });
  }

  logout(){
    console.log("Logging out");
    this.userService.logout()
      .subscribe(res => {
        if(res.status === 200){
          location.reload()
        }
      });
  }
}

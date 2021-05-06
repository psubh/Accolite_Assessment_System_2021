import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@workspace/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = [

    { title:"Projects  ", link: "/projects",
    line2: "Users can view, create, edit & delete projects"},

    {title:"Questions", link: "/questions",
    line1: "Add & view questions without the constraint of a quiz",
    },

    {title:"Quiz Time", link: "/quiz",
    line2: "Users can create quiz by choosing questions from our pool"},

    {title:"Exam Time", link: '/exam',
    line1: "Give exams, and evaluate your results. Get scorecard.",
    },
  ]

  currUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUserDetails()
      .subscribe(res => {
        this.currUser = res;
      })
  }

  ngOnInit(): void {
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}

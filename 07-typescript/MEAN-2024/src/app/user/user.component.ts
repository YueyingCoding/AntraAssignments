import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { user } from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: user[] = [];
  constructor(private users: UserService) { }

  ngOnInit(): void {
    this.users.getData().subscribe((res) => {
      this.userList = res;
    });
  }

}

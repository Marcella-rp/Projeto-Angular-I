import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  listUser: any[] = [];

  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((listUser) => {
      this.listUser = listUser;
      console.log(this.listUser)
      console.log("idDDDD", typeof this.listUser[0].id)
            console.log("idDDDD segundo", this.listUser[1].id)

    });

  }
}

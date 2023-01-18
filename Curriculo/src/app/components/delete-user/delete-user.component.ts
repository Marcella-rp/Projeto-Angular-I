import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  user: any = {};

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUserById(parseInt(id!)).subscribe((user) => {
      this.user = user;
    });
  }

  deleteUser() {
    if (this.user.id) {
      this.usersService.deleteUser(this.user.id).subscribe(() => {
        this.router.navigate(['/list-user']);
      });
    }
  }

  cancelUser() {
    this.router.navigate(['/list-user']);
  }
}
